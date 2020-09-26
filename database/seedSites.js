const faker = require('faker');
const db = require('./index.js');

const weather = ['Cloudy', 'Clear', 'Partly Cloudy', 'Raining', 'Snowing', 'Drizzling'];

const createSite = () => {
  const site = {};
  const randomIndex = Math.floor(Math.random() * weather.length);

  site.siteName = faker.address.streetName();

  site.siteArea = faker.address.city();

  site.siteState = faker.address.state();

  site.elevation = faker.random.number(5300);

  site.temperature = faker.random.number(120);

  site.weather = weather[randomIndex];

  site.distance = faker.random.float({
    min: 0.1,
    max: 100.2,
    precision: 0.1,
  });

  return site;
};

const createSites = () => {
  const sitesArr = [];
  for (let i = 0; i < 100; i++) {
    sitesArr.push(createSite());
  }
  return sitesArr;
};

const insertData = () => {
  const allData = createSites();
  allData.forEach((item) => {
    db.query(`INSERT INTO sites (siteName, siteArea, siteState, elevation, temperature, weather, distance) VALUES ("${item.siteName}", "${item.siteArea}", "${item.siteState}", ${item.elevation}, ${item.temperature}, "${item.weather}", ${item.distance})`, (err, result) => {
      if (err) {
        console.log('site seed failed');
      } else {
        console.log('site seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
