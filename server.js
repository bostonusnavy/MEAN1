var express = require('express'),
    home = require('./server/routes/home.js'),
    customer = require('./server/routes/customer.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

console.log(__dirname);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/contact', customer.contact);

app.listen(3000);