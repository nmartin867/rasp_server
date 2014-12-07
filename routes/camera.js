var express = require('express');
var router = express.Router();
var TcpSocket = require('../services/tcpSocket');

// POST /photo/snap
router.post('/snap', function (req, res) {
    TcpSocket.requestSnapShot(function () {
        res.status(200);
        res.end();
    });
});

module.exports = router;