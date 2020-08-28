const express = require('express');
const mongoose = require('mongoose');
const Author = require('../models/Author');
const { errFnc } = require('../../helper');

const router = express.Router();

// Fetch all authors
router.get('/', (req, res, next) => {
    Author.find().exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                authors: docs
            });
        })
        .catch(e => errFnc(e, res));
});

// Create new author
router.post('/', (req, res, next) => {
    const author = new Author({ ...req.body, _id: new mongoose.Types.ObjectId() });
    author.save()
        .then(doc => {
            res.status(201).json({
                message: 'Created author successfully',
                createdAuthor: doc
            });
        })
        .catch(e => errFnc(e, res));
});

// Fetch single author
router.get('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    Author.findById(authorId).exec()
        .then(doc => {
            if (doc)
                res.status(200).json({ author: doc });
            else
                res.status(404).json({ message: 'No valid entry found for provided ID' });
        })
        .catch(e => errFnc(e, res));
});

// Update single author
router.patch('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Author.findOneAndUpdate({ _id: authorId }, { $set: updateOps }, { new: true }).exec()
        .then(doc => res.status(200).json({ message: 'Author updated successfully', updatedAuthor: doc }))
        .catch(e => errFnc(e, res));
});

// Delete single author
router.delete('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    Author.remove({ _id: authorId }).exec()
        .then(() => res.status(200).json({ message: 'Author deleted successfully' }))
        .catch(e => errFnc(e, res));
});

module.exports = router;
