var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error...'));
    db.once('open', function callback () {
        console.log('MEAN1 DB Opened!');
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });
    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            User.create({firstName:'Rob', lastName:'DeGroot', username:'rdegroot'});
            User.create({firstName:'John', lastName:'Smith', username:'jsmith'});
            User.create({firstName:'Calvin', lastName:'Klein', username:'cklein'});
        }
    })
};

//var messageSchema = mongoose.Schema({message: String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc) {
//   mongoMessage = messageDoc.message;
//});