//importa dependencias
const mongoose = require('mongoose') ;

//importa el server
const app = require('./app') ;
// lee los .env
require('dotenv').config()

//variables de entornos
const dbUser = process.env.DB_USER ;
const dbPass = process.env.DB_PASS ;
const dbHost = process.env.DB_HOST ;
const ipServer = process.env.IP_SERVER ;
const apiVersion = process.env.API_VERSION ;
const port = process.env.PORT;

// conecta la BD
const connectDB = async () => {
     try {
          await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`) ;
          app.listen(port, () => {
               console.log('=============================');
               console.log('===========  API  ===========');
               console.log('=============================');
               console.log(`http://${ipServer}:${port}/api/${apiVersion}/`);
          })
     } catch (error) {
          console.log('ERROR al conectar la BD', error)
          
     }
}

connectDB() ;