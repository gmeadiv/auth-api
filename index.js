'use strict';

const { db } = require('./api-src/models');
const server = require('./api-src/server.js');

require('dotenv').config();

const PORT = process.env.PORT;

db.sync()
.then(() => {
  server.start(PORT);
});