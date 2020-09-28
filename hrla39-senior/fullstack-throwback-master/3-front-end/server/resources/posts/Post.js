const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  votes: {type: Number, default: 0},
  comments: [String]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
