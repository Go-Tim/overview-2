var app = require('./server.js');
var port = 3000;

app.listen(port, function () {
  console.log(`Llamentations is now accepting your drama on port ${port}!`);
});
