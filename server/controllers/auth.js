const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('../utils/jwt');

async function register(req, res) {
     const { firstname, email, password } = req.body;

     //crea el obj usuario 
     const user = new User({
          firstname: firstname,
          email: email.toLowerCase(),
          password: password,
          role: "user",
          active: "false",
     });

     //encripta la clave
     const salt = bcryptjs.genSaltSync(10);
     const hashPasword = bcryptjs.hashSync(password, salt);
     user.password = hashPasword;

     try {
          await user.save();
          res.status(200).send({ msg: 'Se creo exitosamente su usuario.' })
     } catch (error) {
          res.status(400).send({ msg: 'ERROR al crear usuario en la BD', error });
     }
}

async function login(req, res) {
     const { email, password } = req.body;

     try {
          const user = await User.findOne({ email: email.toLowerCase() });

          if (!user) {
               return res.status(400).send({ msg: 'El email no está registrado' });
          }

          const check = await bcryptjs.compare(password, user.password);

          if (!check) {
               return res.status(400).send({ msg: 'Contraseña incorrecta' });
          } 

          return res.status(200).send({ access: jwt.createAccessToken(user) });
     } catch (error) {
          return res.status(400).send({ msg: 'ERROR al loguear usuario' });
     }
}

async function changePassword(req, res) {
     const { email, oldPassword, newPassword } = req.body;
 
     try {
         // busca al usuario en la base de datos por su email
         const user = await User.findOne({ email: email.toLowerCase() });

         if (!user) {
             return res.status(404).send({ msg: 'Email no registrado.' });
         }
 
         // verifica si la contraseña actual es correcta
         const check = bcryptjs.compareSync(oldPassword, user.password);
 
         if (!check) {
             return res.status(400).send({ msg: 'La contraseña actual no es correcta.' });
         }
 
         // encripta la nueva contraseña
         const salt = bcryptjs.genSaltSync(10);
         const hashNewPassword = bcryptjs.hashSync(newPassword, salt);
 
         // actualiza la contraseña en la base de datos
         user.password = hashNewPassword;
         await user.save();
 
         res.status(200).send({ msg: 'Contraseña actualizada correctamente.' });
     } catch (error) {
         res.status(400).send({ msg: 'Error al cambiar la contraseña.', error });
     }
 }

module.exports = {
     register,
     login,
     changePassword,
}