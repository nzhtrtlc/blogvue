const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    surname: { type: String, required: true },
    bio: String,
    mail: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema);
