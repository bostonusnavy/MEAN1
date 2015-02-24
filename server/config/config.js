var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/MEAN1',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://rdegroot:mean1@ds047571.mongolab.com:47571/mean1',
        port: process.env.PORT || 80
    }
};