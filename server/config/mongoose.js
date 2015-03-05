var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

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
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]

    });
    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function (err, collection) {
        if(collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'rdegroot');
            User.create({firstName:'Rob', lastName:'DeGroot', username:'rdegroot', salt: salt, hashed_pwd: hash, roles: ['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'jsmith');
            User.create({firstName:'John', lastName:'Smith', username:'jsmith', salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'cklein');
            User.create({firstName:'Calvin', lastName:'Klein', username:'cklein', salt: salt, hashed_pwd: hash});
        }
    })
};

//var messageSchema = mongoose.Schema({message: String});
//var Message = mongoose.model('Message', messageSchema);
//var mongoMessage;
//Message.findOne().exec(function(err, messageDoc) {
//   mongoMessage = messageDoc.message;
//});