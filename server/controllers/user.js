const User = require('../models/user') ;

async function getMe (req,res) {
     const {user_id } = req.user ;

     const user = await User.findById(user_id) ;
     try {
          if(!user) {
               res.status(400).send({msg: 'Error usuario no se ha encontrado'}) ;
          }
          return res.status(200).send(user) ;
     } catch (error) {
          return res.status(400).send({msg: 'Error usuario no se ha encontrado'}) ;
     }
}

module.exports = {
     getMe,
}