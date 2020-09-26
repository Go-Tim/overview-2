const db = require('./index.js');

const name = ['Firewood bundle', 'Macala Orchards'];

const description = ['Start your trip off right with a bundle of firewood waiting for you at your camp for your first campfire.', 'Olive orchards, vineyard, guava orchards, decorative landscape, and oak groves spread out on our 20 acres set against beautiful natural rock landscape.'];

const price = ['free', '5', '10'];

const image = ['https://fec-overview-2.s3-us-west-1.amazonaws.com/services/FirewoodBundle.png', 'https://fec-overview-2.s3-us-west-1.amazonaws.com/services/MacalaOrchards.png'];

const createService = (id, index) => {
  const service = {};
  const randomIndex = Math.floor(Math.random() * price.length);

  service.id = id;

  service.name = name[index];

  service.description = description[index];

  service.price = price[randomIndex];

  service.image = image[index];

  return service;
};

const createServices = () => {
  const servicesArr = [];

  for (let i = 1; i <= 100; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 40) {
      servicesArr.push(createService(i, 0));
    } else if (randomNum < 80) {
      servicesArr.push(createService(i, 0), createService(i, 1));
    } else {
      servicesArr.push({
        id: i,
        name: null,
        description: null,
        price: null,
        image: null,
      });
    }
  }
  return servicesArr;
};

const insertData = () => {
  const allData = createServices();
  allData.forEach((item) => {
    db.query(`INSERT INTO services (id, name, description, price, image) VALUES (${item.id}, "${item.name}", "${item.description}", "${item.price}", "${item.image}")`, (err, result) => {
      if (err) {
        console.log('service seed failed');
      } else {
        console.log('service seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
