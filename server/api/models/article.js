const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    author: {type: mongoose.Schema.Types.ObjectId, required: true},
    tags: [String],
    comments: String,
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
