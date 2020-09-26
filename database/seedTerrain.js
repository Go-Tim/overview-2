const db = require('./index.js');

let name = ['Mountainous', 'Lake', 'River', 'Farm', 'Ranch', 'Forest'];

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const createTerrain = (id, index) => {
  const terrain = {};

  terrain.id = id;

  terrain.name = name[index];

  terrain.image = `https://fec-overview-2.s3-us-west-1.amazonaws.com/terrain/${terrain.name}.png`;

  return terrain;
};

const createTerrains = () => {
  const terrainArray = [];

  for (let i = 1; i <= 100; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    shuffle(name);
    if (randomNum < 20) {
      terrainArray.push(createTerrain(i, 0));
    } else if (randomNum >= 20 && randomNum < 40) {
      terrainArray.push(createTerrain(i, 0));
      terrainArray.push(createTerrain(i, 1));
    } else if (randomNum >= 40 && randomNum < 60) {
      terrainArray.push(createTerrain(i, 0));
      terrainArray.push(createTerrain(i, 1));
      terrainArray.push(createTerrain(i, 2));
    } else if (randomNum >= 60 && randomNum < 80) {
      terrainArray.push(createTerrain(i, 0));
      terrainArray.push(createTerrain(i, 1));
      terrainArray.push(createTerrain(i, 2));
      terrainArray.push(createTerrain(i, 3));
    } else {
      terrainArray.push(createTerrain(i, 0));
      terrainArray.push(createTerrain(i, 1));
      terrainArray.push(createTerrain(i, 2));
      terrainArray.push(createTerrain(i, 3));
      terrainArray.push(createTerrain(i, 4));
    }
  }
  return terrainArray;
};

const insertData = () => {
  const allData = createTerrains();
  allData.forEach((item) => {
    db.query(`INSERT INTO terrain (id, name, image) VALUES (${item.id}, "${item.name}", "${item.image}")`, (err, result) => {
      if (err) {
        console.log('terrain seed failed');
      } else {
        console.log('terrain seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
