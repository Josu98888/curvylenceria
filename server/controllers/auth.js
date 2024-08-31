const User = require('../models/user') ;
const bcryptjs = require('bcryptjs') ;

async function register(req, res) {
     const {firstname,email,password} = req.body ;

     //crea el obj usuario 
     const user = new User({
          firstname: firstname,
          email: email.toLowerCase() ,
          password: password,
          role: "user",
          active: "false",
     });

     //encripta la clave
     const salt =bcryptjs.genSaltSync(10) ;
     const hashPasword = bcryptjs.hashSync(password,salt) ;
     user.password = hashPasword ;

     try {
          await user.save() ;
          res.status(200).send({msh: 'EXITO al guardar usuario en la BD'})
     } catch (error) {
          res.status(400).send({msg: 'ERROR al crear usuario en la BD', error}) ;
     }
}

module.exports = {
     register,
}