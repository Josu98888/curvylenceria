const express = require('express') ;
const api = express.Router() ;
const ProductController = require('../controllers/product') ;

const multiparty = require('connect-multiparty') ;
const md_upload = multiparty({ uploadDir:'./uploads'})

//metodos para ejecutar desde las rutas 
api.post('/product', [md_upload], ProductController.createProduct ) ;
api.get('/products' , ProductController.getProducts ) ;
api.get('/products/:id', ProductController.getProduct) ;
api.put('/product/:id' ,[md_upload] , ProductController.updateProduct ) ;
api.delete('/product/:id', ProductController.deleteProduct ) ;

module.exports = api ; 