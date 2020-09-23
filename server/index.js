const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('dev');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => console.log(`CURRENTLY LISTENING ON LOCALHOST:${port}`));

