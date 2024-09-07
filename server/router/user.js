const express = require('express') ;
const UserController = require('../controllers/user') ;
const mdAuth = require('../middlewares/authenticated') ;

//se crea las rutas con express
const api = express.Router() ;

//se crean las rutas
api.get('/user/me',[mdAuth.asureAuth], UserController.getMe) ;

module.exports = api ;