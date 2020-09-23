const overviewElement = require('./index.js');

const services = [];

const activities = [];

const terrain = [];

const image = [{ user: , userPic: , imgURL: }, { user: , userPic: , imgURL: }, { user: , userPic: , imgURL: }];

const tourism = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa"];

const createSite = () => {
  let site = {};
  site.services = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  site.activities = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  site.terrain = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  site.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return site;
};

const createSites = () => {
  let sitesArray = [];
  for(let i = 0; i < 100; i++){
    sitesArray.push(createSite())
  }
  return sitesArray
}

const insertMockData = function() {
  var newArray = createSites();
  newArray.forEach((item, index) => {
  });
};

insertMockData();






