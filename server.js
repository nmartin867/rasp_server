var express = require('express');
var app = express();
var http = require('http').Server(app);
var staticPath = __dirname + '/public';


var home = require('./routes/home');
var camera = require('./routes/camera');

app.set('view engine', 'ejs');
app.set('views', staticPath + '/views');
app.use(express.static(staticPath));

/* Routes */
app.use('/', home);
app.use('/photo', camera);


module.exports = http;