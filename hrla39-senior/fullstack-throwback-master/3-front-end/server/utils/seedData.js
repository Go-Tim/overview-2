const db = require('../../db-mongodb');
const Post = require('../resources/posts/Post.js');

const data = [
  {
    title: 'Awful start to the day',
    body: 'I missed my bus and was 15 minutes late to class :('
  },
  {
    title: 'My cat hates me',
    body: 'I woke up this morning and the cat had completely shredded my favorite sweater.',
    votes: 3,
    comments: ['cats are mean', 'bad kitty!']
  },
  {
    title: 'They ruined my order',
    body: 'I asked for a double-double whipless mochaccino half-caf, but the barista gave me a cup full of lemon peels instead?',
    votes: 5,
    comments: ['Are you sure you were at a coffee shop?', 'that doesn\'t sound very appeeling lolol', 'gross!']
  },
  {
    title: 'Not enough dogs',
    body: 'I went to the dog park to play with all the dogs, but there were zero dogs, which is an unacceptably low number of dogs.'
  },
  {
    title: 'They just took all the good seasons of Futurama off of Netflix',
    body: 'How am I supposed to go to sleep now? I\'m so bummed about this.',
    votes: 9,
    comments: ['My sleep schedule is doomed! DOOOOOOOOMED!', 'bad news, everyone']
  }
];

const seedDatabase = function() {
  Post.remove({})
  .then(Post.create(data))
  .then(db.disconnect())
}

seedDatabase();
