const db = require('./index.js');

module.exports = {
  getSite: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM sites WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getActivities: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM activities WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getAttractions: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM attractions WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getPhotos: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM photos WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getServices: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM services WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getTerrain: (req, callback) => {
    const { id } = req.params;
    const queryStr = `SELECT * FROM terrain WHERE id=${id}`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};
