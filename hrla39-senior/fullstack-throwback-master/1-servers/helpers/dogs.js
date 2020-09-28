var fs = require('fs'); // NOTE: You may NOT use any of the SYNC versions of fs.s
var shortid = require('shortid');
var dogDataFile = __dirname + '/../data/dogs.txt';

var getAll = function(callback) {
  // Your code here! This function should get all
  // dogs in the data file as an array of objects.
  // The objects should have the keys: name, breed,
  // id with values from the dog data file

}


var getOneById = function(id, callback) {
  // Your code here! This function should get the one
  // dog object with the matching id from the dog file.
  // The object should have the keys: name, breed, id
  // with appropriate values from the dog data file.

}

var addOne = function(name, breed, callback) {
  // Your code here! This function should add a
  // dog with name, breed, and id (use the shortid module)
  // to the dog data file
  
}

module.exports.getAll = getAll;
module.exports.getOneById = getOneById;
module.exports.addOne = addOne;
