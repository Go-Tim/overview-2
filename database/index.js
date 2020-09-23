const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`currently listening on ${db.host}:${db.port}`));

const overviewSchema = new mongoose.Schema({
  siteName: String,
  areaName: String,
  services: [],
  servicesDescription: String,
  servicesImg: String,
  activities: [],
  activitiesImg: String,
  terrain: [],
  terrainImg: String,
  elevation: String,
  weather: String,
  weatherDescription: String,
  distance: String,
  imgs: [],
  tourism: []
});

module.exports = mongoose.model('overviewElement', overviewSchema);