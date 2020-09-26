const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'hjkl1240',
  database: 'timcamp',
});

db.connect();

module.exports = db;
