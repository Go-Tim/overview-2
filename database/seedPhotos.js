const faker = require('faker');
const db = require('./index.js');

const createPhoto = (id) => {
  const photo = {};

  photo.id = id;

  photo.photo = `https://fec-overview-2.s3-us-west-1.amazonaws.com/campsitephotos/camp${faker.random.number(346)}.jpg`;

  photo.userName = faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.';

  photo.userImage = 'https://fec-overview-2.s3-us-west-1.amazonaws.com/tim/Tim.png';

  photo.date = faker.date.past();

  photo.likes = faker.random.number(10);

  photo.caption = faker.lorem.sentence();

  return photo;
};

const createPhotos = () => {
  const photosArr = [];

  for (let i = 0; i < 100; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 20) {
      for (let j = 0; j < 15; j++) {
        photosArr.push(createPhoto(i));
      }
    } else if (randomNum >= 20 && randomNum < 40) {
      for (let j = 0; j < 29; j++) {
        photosArr.push(createPhoto(i));
      }
    } else if (randomNum >= 40 && randomNum < 60) {
      for (let j = 0; j < 47; j++) {
        photosArr.push(createPhoto(i));
      }
    } else if (randomNum >= 60 && randomNum < 80) {
      for (let j = 0; j < 109; j++) {
        photosArr.push(createPhoto(i));
      }
    } else {
      for (let j = 0; j < 123; j++) {
        photosArr.push(createPhoto(i));
      }
    }
  }
  return photosArr;
};

const insertData = () => {
  let allData = createPhotos();
  allData.forEach((item) => {
    db.query(`INSERT INTO photos (id, photo, userName, userImage, date, likes, caption) VALUES (${item.id}, "${item.photo}", "${item.userName}", "${item.userImage}", "${item.date}", "${item.likes}", "${item.caption}")`, (err, result) => {
      if (err) {
        console.log('photo seed failed');
      } else {
        console.log('photo seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
