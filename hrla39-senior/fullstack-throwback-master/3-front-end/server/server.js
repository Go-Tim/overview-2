var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var db = require('../db-mongodb/');
const postRouter = require('./resources/posts/PostRouter.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/dist/')));

app.use('/api/posts', postRouter);

module.exports = app;
