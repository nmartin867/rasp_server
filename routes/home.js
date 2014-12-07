var express = require('express');
var router = express.Router();
var app = require('../server');

// GET /
router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;