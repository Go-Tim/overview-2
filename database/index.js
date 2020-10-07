const PASSWORD = require('./config.js');
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: PASSWORD,
  database: 'timcamp',
});

db.connect();

module.exports = db;
