const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// crear squema
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    created_at: { type: Date, default: Date.now },
    preferences: {
        theme: String,
        time_block: Number,
        language: { type: String, default: 'en' }
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// creo el modelo
const userModel = mongoose.model('User', userSchema);

// exporto el modelo
module.exports = userModel;