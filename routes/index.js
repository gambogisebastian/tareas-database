var express = require('express');
var rutear = express.Router();

/* GET home page. */
rutear.get('/', function(req, res, next) {
  res.send({ title: 'Algo distinto y útil' });
});

module.exports = rutear;