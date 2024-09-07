const jwt = require('jsonwebtoken') ;
require('dotenv').config() ;
const JWT_SECRET_KEY = process.env.JTW_SECRET_KEY ;

//crea token de acceso
function createAccessToken(user) {
     //expiraxion del token
     const expToken = new Date() ;
     expToken.setHours(expToken.getHours() + 3) ;

     //info detras del token
     const payload ={
          token_type: 'access' ,
          user_id: user._id,
          iat: Date.now(),
          exp: expToken.getTime()
     }

     //token
     return jwt.sign(payload, JWT_SECRET_KEY ) ;
}

//obtiene datos del token
function decode(token) {
     return jwt.decode(token, JWT_SECRET_KEY, true) ;
}
module.exports = {
     createAccessToken,
     decode,
}