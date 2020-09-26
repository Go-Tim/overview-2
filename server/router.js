const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/site/:id')
  .get(controllers.getSite);

router
  .route('/activities/:id')
  .get(controllers.getActivities);

router
  .route('/attractions/:id')
  .get(controllers.getAttractions);

router
  .route('/photos/:id')
  .get(controllers.getPhotos);

router
  .route('/services/:id')
  .get(controllers.getServices);

router
  .route('/terrain/:id')
  .get(controllers.getTerrain);

module.exports = router;
