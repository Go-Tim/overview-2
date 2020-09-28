var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/hackoverflow';

mongoose.connect(mongoUri, {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MONGO PORT IS OPEN')
});

module.exports = db;
