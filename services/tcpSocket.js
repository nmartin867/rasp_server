var nssocket = require('nssocket');
var WebSocket = require('./webSocket');

function onImageData(data) {
    WebSocket.sendStillImage(data);
};

function onClientLogging(data) {
    WebSocket.sendLogging(data);
};

var SocketServer = module.exports = {
    clientSocket: null,
    tcpServer: null,
    connect: function (port) {
        SocketServer.tcpServer = nssocket.createServer(function (socket) {
            SocketServer.clientSocket = socket;
            SocketServer.clientSocket.on('error', function (err) {
                //TODO: Log errors somewhere that can be read
                throw err;
            });
            SocketServer.clientSocket.data(['camera', 'still-image'], onImageData);
            SocketServer.clientSocket.data(['client', 'log'], onClientLogging);
        });
        SocketServer.tcpServer.listen(port);
    },
    requestSnapShot: function (callback) {
        SocketServer.clientSocket.send(['camera', 'still']);
        callback();
    }
};

