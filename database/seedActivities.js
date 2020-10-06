const db = require('./index.js');

let name = ['Biking', 'Boating', 'Climbing', 'Fishing', 'Hiking', 'Paddling', 'Swimming'];

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

const createActivity = (id, index) => {
  const activity = {};

  activity.id = id;

  activity.name = name[index];

  activity.image = `https://fec-overview-2.s3-us-west-1.amazonaws.com/activities/${activity.name}.png`;

  return activity;
};

const createActivities = () => {
  const activitiesArr = [];

  for (let i = 1; i <= 100; i++) {
    const randomNum = Math.floor(Math.random() * 100);
    shuffle(name);
    if (randomNum < 20) {
      activitiesArr.push(createActivity(i, 0));
    } else if (randomNum >= 20 && randomNum < 40) {
      activitiesArr.push(createActivity(i, 0));
      activitiesArr.push(createActivity(i, 1));
    } else if (randomNum >= 40 && randomNum < 60) {
      activitiesArr.push(createActivity(i, 0));
      activitiesArr.push(createActivity(i, 1));
      activitiesArr.push(createActivity(i, 2));
    } else if (randomNum >= 60 && randomNum < 80) {
      activitiesArr.push(createActivity(i, 0));
      activitiesArr.push(createActivity(i, 1));
      activitiesArr.push(createActivity(i, 2));
      activitiesArr.push(createActivity(i, 3));
    } else {
      activitiesArr.push(createActivity(i, 0));
      activitiesArr.push(createActivity(i, 1));
      activitiesArr.push(createActivity(i, 2));
      activitiesArr.push(createActivity(i, 3));
      activitiesArr.push(createActivity(i, 4));
    }
  }
  return activitiesArr;
};

const insertData = () => {
  const allData = createActivities();
  allData.forEach((item) => {
    db.query(`INSERT INTO activities (id, name, image) VALUES (${item.id}, "${item.name}", "${item.image}")`, (err, result) => {
      if (err) {
        console.log('activity seed failed');
      } else {
        console.log('activity seed succeeded!');
      }
    });
  });

  db.end();
};

insertData();
