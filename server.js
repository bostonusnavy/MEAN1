var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));
// Above string is used to serve up static files from the '/public' directory
// - app folder
// - css folder
// - vender folder

if(env === 'development') {
    mongoose.connect('mongodb://localhost:27017/MEAN1');
}   else {
    mongoose.connect('mongodb://rdegroot:mean1@ds047571.mongolab.com:47571/mean1');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error...'));
db.once('open', function callback () {
   console.log('MEAN1 DB Opened!');
});
//var messageSchema = mongoose.Schema({message: String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc) {
//   mongoMessage = messageDoc.message;
//});

app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
});

app.get('*', function (req, res) {
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');