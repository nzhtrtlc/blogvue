const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /articles'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /articles'
    })
});

router.get('/:articleId', (req, res, next) => {
    const articleId = req.params.articleId;
    if (articleId === 'special') {
        res.status(200).json({ message: 'DISCOVERED', id: articleId })
    } else {
        res.status(200).json({ message: 'you passed an ID' })
    }
});

router.patch('/:articleId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated article!'
    });
});

router.delete('/:articleId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted article!'
    });
});

module.exports = router;
