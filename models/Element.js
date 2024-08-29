const mongoose = require('mongoose');

// creo el esquema
const elementSchema = new mongoose.Schema({
    title: String,
    description: String,
    time_blocks: Number,
    user_id: { type:  mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

// creo el modelo
const Element = mongoose.model('Element', elementSchema);

// exporto el modelo
module.exports = Element;