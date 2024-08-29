const mongoose = require('mongoose');

// CREO FUNCION PARA CONECTAR
const connectDB = async () => {

    try{
        // conectar
        await mongoose.connect(process.env.MONGO_URI);
        console.log('CONECTADO A MONGODB');

    }catch (error){
        console.error('ERROR AL CONECTAR A MONGODB ', error.message);
        process.exit(1);
    }

};

module.exports = connectDB;