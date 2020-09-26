const faker = require('faker');
const db = require('./index.js');

const name = ['State Park', 'National Forest'];

const createAttraction = (id) => {
  const attraction = {};
  const randomIndex = Math.floor(Math.random() * name.length);

  attraction.id = id;

  attraction.name = `${faker.address.streetName()} ${name[randomIndex]}`;

  attraction.image = `https://fec-overview-2.s3-us-west-1.amazonaws.com/campsitephotos/camp${faker.random.number(346)}.jpg`;

  attraction.distance = faker.random.number(100);

  return attraction;
};

const createAttractions = () => {
  const attractionsArr = [];

  for (let i = 1; i <= 100; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 20) {
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
    } else if (randomNum >= 20 && randomNum < 40) {
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
    } else if (randomNum >= 40 && randomNum < 60) {
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
    } else if (randomNum >= 60 && randomNum < 80) {
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
    } else {
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
      attractionsArr.push(createAttraction(i));
    }
  }
  return attractionsArr;
};

const insertData = () => {
  let allData = createAttractions();
  allData.forEach((item) => {
    db.query(`INSERT INTO attractions (id, name, image, distance) VALUES (${item.id}, "${item.name}", "${item.image}", ${item.distance})`, (err, result) => {
      if (err) {
        console.log('attraction seed failed');
      } else {
        console.log('attraction seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
