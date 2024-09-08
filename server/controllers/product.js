const image = require('../utils/image') ;
const Product = require('../models/product') ;

// crear producto
async function createProduct(req, res) {
    // creamos el producto
    const product = new Product(req.body) ;

    // se agrega la url a la propiedad image
    if(req.files.image) {
        const url = image.getFileName(req.files.image) ;
        product.image = url ;
    }

    //guardamos el producto en la base de datos
    try {
        await product.save() ;
        res.status(200).send({msg: 'EXITO al guardar el producto en la BD'}) ;
    } catch (error) {
        res.status(401).send({msg: 'ERROR al guardar el producto en la BD'}) ;
    }

} 

// obtener productos
async function getProducts(req, res) {
    try {
        // recibe los productos
        const products = await Product.find() ;
        res.status(200).send(products) ;
    } catch (error) {
        res.status(500).send({msg: 'ERROR al obtener los productos'}) ;
    }
};

// obtener producto
async function getProduct(req, res) {
    const {id} = req.params ; 

    try {
        const product = await Product.findById({_id : id}) ;
        res.status(200).send(product) ;
    } catch (error) {
        res.status(500).send({msg: 'ERROR al obtener el producto'}) ;
    }


} 
//actualizar producto
async function updateProduct(req, res) {
    // recibe el id del producto
    const {id} = req.params ;

    //se crea el producto con los datos
    const newProduct = req.body ;
    
    // se agrega la url a la propiedad image
    if(req.files.image) {
        const url = image.getFileName(req.files.image) ;
        newProduct.image = url ;
    } ;

    try {
        // actualiza los datos del producto con el id recibido
        await Product.findByIdAndUpdate({_id: id}, newProduct) ;
        res.status(200).send({msg: 'EXITO al actualizar el producto'}) ;
    } catch (error) {
        res.status(401).send({msg: 'ERROR al actualizar el producto'}) ;
    }  
}; 

//eliminar producto
async function deleteProduct (req, res) {
    // recibe el id del producto
    const {id} = req.params ;

    try {
        // elimina el producto por id
        await Product.findByIdAndDelete(id) ;
        res.status(200).send({msg: 'EXITO al eliminar el producto'}) ;
    } catch (error) {
        res.status(401).send({msg: 'ERROR al eliminar el producto'}) ;
    }  
}
module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}