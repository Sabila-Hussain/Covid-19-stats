var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var states = require('./routes/states');

var app = express();

jsonpath = '../data/statesdata.json'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/states', states);



module.exports = app;
