const express = require('express');
const mongoose = require('mongoose');
const Article = require('../models/article');
const { errFnc } = require('../../helper');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

// Fetch all articles
router.get('/', (req, res, next) => {
    Article.find().exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                articles: docs
            });
        })
        .catch(e => errFnc(e, res));
});

// Fetch single article
router.get('/:articleId', (req, res, next) => {
    const articleId = req.params.articleId;
    Article.findById(articleId).exec()
        .then(doc => {
            if (doc)
                res.status(200).json({ article: doc });
            else
                res.status(404).json({ message: 'No valid entry found for provided ID' });
        })
        .catch(e => errFnc(e, res));
});

// Create new single article
router.post('/', checkAuth, (req, res, next) => {
    const article = new Article({ ...req.body, _id: new mongoose.Types.ObjectId() });
    article.save()
        .then(doc => {
            res.status(201).json({
                message: 'Created article successfully',
                createdArticle: doc
            });
        })
        .catch(e => errFnc(e, res));
});

// Update single article
router.patch('/:articleId', checkAuth, (req, res, next) => {
    const articleId = req.params.articleId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Article.findOneAndUpdate({ _id: articleId }, { $set: updateOps }, { new: true }).exec()
        .then(doc => res.status(200).json({ message: 'Article updated successfully', updatedArticle: doc }))
        .catch(e => errFnc(e, res));
});

// Delete single article
router.delete('/:articleId', checkAuth, (req, res, next) => {
    const articleId = req.params.articleId;
    Article.remove({ _id: articleId }).exec()
        .then(() => res.status(200).json({ message: 'Article deleted successfully' }))
        .catch(e => errFnc(e, res));
});

module.exports = router;
