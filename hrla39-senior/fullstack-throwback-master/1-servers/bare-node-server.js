var http = require('http');
var dogs = require('./helpers/dogs.js');

/*
Your server here! If you need help getting started,
check out the node anatomy of an http transaction documentation.
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
*/

var server = http.createServer(function(req, res) {

});

server.listen(3000, function() {
  console.log('bare node server listening on port 3000!')
})
