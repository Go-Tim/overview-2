const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// return all the books in the database
const getAllBooks = function(callback) {
  connection.query('select * from books', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// return one book from the database, found by its unique ID
const getBookById = function(id, callback) {
  // TODO - your code here!

}

// return the one user's collection, found by its user ID
const getCollectionByUserId = function(id, callback) {
  // TODO - your code here!

}

// add a book to a user's collection, storing the book ID and user ID
const addBookToCollection = function(userId, bookId, callback) {
  // TODO - your code here!

}

// get two collections by user id, then compare them
const findAndCompareCollections = function(userA, userB, callback) {
  // TODO - your code here!

};

module.exports.getAllBooks = getAllBooks;
module.exports.getBookById = getBookById;
module.exports.getCollectionByUserId = getCollectionByUserId;
module.exports.addBookToCollection = addBookToCollection;
module.exports.findAndCompareCollections = findAndCompareCollections;
