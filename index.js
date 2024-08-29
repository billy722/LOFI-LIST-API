const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const connectDB = require('./config/db_connection');
const User = require('./models/User');
const Element = require('./models/Element');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
// MIDDLEWARE PARA MANEJAR JSON
// app.use(express.json);

// RUTAS
// app.use('/api/auth', require('./routes/auth'));

app.post('/', (req, res) => {
    res.send("funciona chicos");
})

// CREAR USUARIO
app.post('/create-user', async (req, res) => {

    try{
        const newUser = new User({user_name: 'billy722', user_password: '123'});
        await newUser.save();
        res.status(201).send(newUser);
    }catch(error){
        res.status(500).send(error.message);
    }

});

//CREAR ELEMENTO
app.get('/create-element', async (req, res) => {
    try{
        const newElement = new Element({
            title: 'LOFI-LIST',
            description: 'Develop a web app to organize daily activities.',
            time_blocks: 1
        });
        await newElement.save();
        res.status(201).send({Elemento_creado: newElement});

    }catch(error){
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT);
});