var express = require('express');
var rutear = express.Router();

/* GET home page. */
rutear.get('/', function(req, res, next) {
  res.render('index', { title: 'Algo distinto y útil' });
});

module.exports = rutear;