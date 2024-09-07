const jwt = require('../utils/jwt') ;
function asureAuth(req,res,netx) {
     //verifica que llegue el token
     if(!req.headers.authorization) {
          res.status(403).send({msg: 'ERROR la peticion o tiene cabecera'}) ;
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
               res.status(400).send({msg: 'El token ha expirado'}) ;
          }

          req.user = payload ;
          netx() ;
     } catch (error) {
          res.status(400).send({msg: 'ERROR Token invalido'}) ;
     }
}

module.exports = {
     asureAuth,
}