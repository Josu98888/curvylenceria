//importa dependencias
const express = require('express') ;
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

// crea el servidor
const app = express() ;

//configura las cors
app.use(cors()) ;

//importa las rutas
const authRoutes = require('./router/auth') ;
const userRoutes = require('./router/user') ;
const productRoutes = require('./router/product') ;

//configura bodyParser
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(bodyParser.json()) ;

//configura los static folder
app.use(express.static('uploads')) ;

//configuras las rutas
app.use('/api/v1', authRoutes) ;
app.use('/api/v1', userRoutes) ;
app.use('/api/v1', productRoutes) ;

//eporta app
module.exports = app ;