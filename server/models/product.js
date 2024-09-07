const moongose = require('mongoose') ;

const ProductSchema = moongose.Schema({
    title: String,
    description: String,
    price: Number,
    model: String,
    offer: Boolean,
    discount: Number,
    image: String,
    outstanding: Boolean,
    sizes: String,
    quantity: Number, 
}) ;

module.exports = moongose.model('product', ProductSchema) ;