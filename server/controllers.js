const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  getSite: (req, res) => {
    dbHelpers.getSite(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  getActivities: (req, res) => {
    dbHelpers.getActivities(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  getAttractions: (req, res) => {
    dbHelpers.getAttractions(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  getPhotos: (req, res) => {
    dbHelpers.getPhotos(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  getServices: (req, res) => {
    dbHelpers.getServices(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
  getTerrain: (req, res) => {
    dbHelpers.getTerrain(req, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  },
};
