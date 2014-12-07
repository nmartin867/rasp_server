var socketio = require('socket.io');

var WebSocket = module.exports = {
    connect: function (http) {
        WebSocket.IO = socketio(http);
    },
    sendStillImage: function (imgData) {
        WebSocket.IO.emit('image-still', imgData);
    },
    sendLogging: function(logData){
        WebSocket.IO.emit('client-log', logData);
    }
};