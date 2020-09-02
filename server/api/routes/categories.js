const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/category');
const { errFnc } = require('../../helper');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

// Fetch all categories
router.get('/', (req, res, next) => {
    Category.find().exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                categories: docs
            });
        })
        .catch(e => errFnc(e, res))
});

// Fetch single category
router.get('/:categoryId', (req, res, next) => {
    const categoryId = req.params.categoryId;
    Category.findById(categoryId).exec()
        .then(doc => {
            if (doc)
                res.status(200).json({ category: doc });
            else
                res.status(404).json({ message: 'No valid entry found for provided ID' });
        })
        .catch(e => errFnc(e, res));
});

// Create single category
router.post('/', checkAuth, (req, res, next) => {
    const category = new Category({ ...req.body, _id: new mongoose.Types.ObjectId() });
    category.save()
        .then(doc => {
            res.status(200).json({
                message: 'Created category successfully',
                createdCategory: doc
            });
        })
        .catch(e => errFnc(e, res))
});

// Update single category
router.patch('/:categoryId', checkAuth, (req, res, next) => {
    const categoryId = req.params.categoryId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Category.findOneAndUpdate({ _id: categoryId }, { $set: updateOps }, { new: true }).exec()
        .then(doc => res.status(200).json({ message: 'Category updated successfully', updatedCategory: doc }))
        .catch(e => errFnc(e, res));
});

// Delete single category
router.delete('/:categoryId', checkAuth, (req, res, next) => {
    const categoryId = req.params.categoryId;
    Category.remove({ _id: categoryId }).exec()
        .then(() => res.status(200).json({ message: 'Category deleted successfully' }))
        .catch(e => errFnc(e, res));
});

module.exports = router;
