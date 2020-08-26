const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    category: String,
    author: mongoose.Schema.Types.ObjectId,
    tags: [String],
    comments: String,
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
