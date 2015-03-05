var mongoose = require('mongoose'),
    userModel = require('../models/User');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error...'));
    db.once('open', function callback() {
        console.log('MEAN1 DB Opened!');
    });

    userModel.createDefaultUsers();

};





//var messageSchema = mongoose.Schema({message: String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc) {
//   mongoMessage = messageDoc.message;
//});