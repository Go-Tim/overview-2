const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/state/area/:site')
  .get(controllers.getSite)

module.exports = router;
