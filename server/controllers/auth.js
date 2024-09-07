const User = require('../models/user') ;
const bcryptjs = require('bcryptjs') ;
const jwt = require('../utils/jwt') ;

async function register(req, res) {
     const {firstname, email ,password} = req.body ;

     //crea el obj usuario 
     const user = new User({
          firstname: firstname,
          email: email.toLowerCase(),
          password: password,
          role: "user",
          active: "false",
     });

     //encripta la clave
     const salt = bcryptjs.genSaltSync(10) ;
     const hashPasword = bcryptjs.hashSync(password,salt) ;
     user.password = hashPasword ;

     try {
          await user.save() ;
          res.status(200).send({msh: 'EXITO al guardar usuario en la BD'})
     } catch (error) {
          res.status(400).send({msg: 'ERROR al crear usuario en la BD', error}) ;
     }
}

async function login(req, res) {
     const {email, password} = req.body ;

     try {
          const user = await User.findOne({email: email.toLowerCase() }) ;
          const check = await bcryptjs.compare(password, user.password) ;

          if(!check) {
               res.status(400).send({msg: 'Contraseña incorrecta'}) ;
          }else {
               res.status(200).send({access: jwt.createAccessToken(user)}) ;
          }
     }catch (error) {
          res.status(400).send({msg:'ERROR al loguear usuario'}) ;
     }
}

module.exports = {
     register,
     login,
}