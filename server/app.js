const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// API Routes
const articleRoutes = require('./api/routes/articles');
const categoryRoutes = require('./api/routes/categories');
const authorRoutes = require('./api/routes/author');

// MongoDB connection
mongoose.connect('mongodb+srv://'
    + process.env.MONGO_ATLAS_USER + ':'
    + process.env.MONGO_ATLAS_PW + '@cluster0.dxbex.mongodb.net/'
    + process.env.MONGO_ATLAS_DB + '?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Http request logger
app.use(morgan('dev'));

// body-parser for cleaner http responses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Avoid cors errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes which handle api requests
app.use('/articles', articleRoutes);
app.use('/categories', categoryRoutes);
app.use('/author', authorRoutes);

// Handle other undefined routes error
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Handle unexpected internal server errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            statusCode: error.status
        }
    })
});

module.exports = app;
