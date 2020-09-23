const overviewElement = require('../database/index.js');


module.exports = {
  getSite: (req, res) => {
    overviewElement.findOne({ site: req.params.site })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).send(err))
  }
}