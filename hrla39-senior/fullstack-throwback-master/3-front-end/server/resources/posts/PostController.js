const Post = require('./Post.js');

module.exports = {
  getAll (req, res) {
    // res.send('getting all the posts');

    Post.find({})
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.status(404).send('could not find posts', err);
    })
  },

  add (req, res) {
    // res.send('making a new post');
    Post.create(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res.status(500).send('could not add post', err);
    })
  },

  // /api/posts/:id
  getOne(req, res) {
    // res.send(`getting post ${req.params.id}`);
    Post.findOne({_id: req.params.id})
    .then(post => {
      res.json(post)
    })
    .catch(err => {
      res.status(500).send('error finding post', err);
    })
  },

  upvote(req, res) {
    let query = {_id: req.params.id};
    let options = {new: true};

    Post.findOneAndUpdate(query, {$inc: {votes: 1}}, options)
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).send('error updating post', err);
    });
  },

  addComment(req, res) {
    let query = {_id: req.params.id};
    let options = {new: true};

    Post.findOneAndUpdate(query, {$push: {"comments": req.body.comment}}, options)
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).send('error updating post', err);
    })
  }
};
