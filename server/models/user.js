const mongoose = require('mongoose') ;

const UserSchema = mongoose.Schema({
     firstname: String,
     email: {
          type:String,
          unique: true,
     },
     password: String,
     role: String,
     active: Boolean,
});

module.exports =mongoose.model('User', UserSchema) ;