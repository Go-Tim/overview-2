const postRouter = require('express').Router()
const postController = require('./PostController');

postRouter.route('/')
  .get(postController.getAll)
  .post(postController.add);

postRouter.route('/:id')
  .get(postController.getOne)

postRouter.route('/:id/votes')
  .post(postController.upvote);

postRouter.route('/:id/comments')
  .post(postController.addComment);

module.exports = postRouter;
