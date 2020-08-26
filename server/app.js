const express = require('express');

const app = express();

const articleRoutes = require('./api/routes/articles');
const categoryRoutes = require('./api/routes/categories');

app.use('/articles', articleRoutes);
app.use('/categories', categoryRoutes);

module.exports = app;
