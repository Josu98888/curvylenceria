const jwt = require('../utils/jwt') ;
function asureAuth(req,res,next) {
     //verifica que llegue el token
     if(!req.headers.authorization) {
          return res.status(403).send({msg: 'ERROR la peticion o tiene cabecera'}) ;
     };
     
     //eliminar palabra bearer
     const token = req.headers.authorization.replace('Bearer ', '') ;

     try {
          //obtiene los datos del token
          const payload = jwt.decode(token) ;

          //horarios para comparar la expiracion
          const {exp} = payload ;
          const currentData = new Date().getTime() ;

          //validacion expiracion
          if(exp <=  currentData) {
               return res.status(400).send({msg: 'El token ha expirado'}) ;
          }

          req.user = payload ;
          next() ;
     } catch (error) {
          return res.status(400).send({msg: 'ERROR Token invalido'}) ;
     }
}

module.exports = {
     asureAuth,
}