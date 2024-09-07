//importa dependecia y controller
const express = require('express') ;
const AuthController = require('../controllers/auth') ;

//se crea las rutas con express
const api = express.Router() ;

//se crean las rutas
api.post('/auth/register', AuthController.register) ;
api.post('/auth/login', AuthController.login) ;

module.exports = api ;