const express = require('express');
const bodyParser = require('body-parser');

const db = require('../db-mysql/index.js');
const data = require('../data/dummy-data.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/books/', (req, res) => {
  db.getAllBooks((err, books) => {
    if (err) {
      res.status(404).send('error getting books!', err);
    }
    if (books) {
      res.status(200).json(books);
    }
  })
});

app.get('/api/books/:id', (req, res) => {
  db.getBookById(req.params.id, (err, book) => {
    if (err) {
      res.status(404).send('could not find that book', err);
    }
    if (book) {
      res.status(200).json(book);
    }
  })
});

app.get('/api/users/:id/collection', (req, res) => {
  db.getCollectionByUserId(req.params.id, (err, collection) => {
    if (err) {
      res.status(404).send('could not find that user\'s collection', err);
    }
    if (collection) {
      res.status(200).json(collection);
    }
  })
});

app.post('/api/users/:id/collection', (req, res) => {
  db.addBookToCollection(req.params.id, req.query.b, (err, updatedCollection) => {
    if (err) {
      res.status(500).send('could not update that user\'s collection', err);
    }
    if (updatedCollection){
      res.status(201).json(updatedCollection);
    }
  })

});

app.get('/api/users/:userIdA/collection/:userIdB', (req, res) => {
  db.findAndCompareCollections(req.params.userIdB, req.params.userIdA, (err, uniqueBooks) => {
    if (err) {
      res.status(404).send('trouble comparing those collections', err);
    }
    if (uniqueBooks) {
      res.status(200).json(uniqueBooks);
    }
  });
});


app.listen(3000, () => {
  console.log('listening on port 3000');
});
