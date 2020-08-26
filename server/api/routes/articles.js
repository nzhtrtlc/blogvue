const express = require('express');
const mongoose = require('mongoose');
const Article = require('../models/article');
const { errFnc } = require('../../helper');

const router = express.Router();

// Fetch all articles
router.get('/', async (req, res, next) => {
    const docs = await Article.find().exec().catch(e => errFnc(e, res));
    return res.status(200).json(docs);
});

// Create new single article
router.post('/', async (req, res, next) => {
    const article = new Article({ ...req.body, _id: new mongoose.Types.ObjectId() });
    await article.save().catch(e => errFnc(e, res));
    return res.status(201).json(article);
});

// Fetch single article
router.get('/:articleId', async (req, res, next) => {
    const articleId = req.params.articleId;
    const doc = await Article.findById(articleId).exec().catch(e => errFnc(e, res));
    if (doc)
        return res.status(200).json(doc);
    else
        return res.status(404).json({ message: 'No valid entry found for provided ID' });
});

// Update single article
router.patch('/:articleId', async (req, res, next) => {
    const articleId = req.params.articleId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    const result = await Article.update({ _id: articleId }, { $set: updateOps }).exec().catch(e => errFnc(e, res));
    return res.status(200).json(result);
});

// Delete single article
router.delete('/:articleId', async (req, res, next) => {
    const articleId = req.params.articleId;
    const result = await Article.remove({ _id: articleId }).exec().catch(e => errFnc(e, res));
    return res.status(200).json(result);
});

module.exports = router;
