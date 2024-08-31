//importa dependencias
const express = require('express') ;
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

// crea el servidor
const app = express() ;

//configura las cors
app.use(cors()) ;

//importa las rutas


//configura bodyParser
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(bodyParser.json()) ;

//configura los static folder
app.use(express.static('uploads')) ;

//eporta app
module.exports = app ;