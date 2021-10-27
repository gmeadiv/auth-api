'use strict';

const { apiDB } = require('./api-src/models');
const server = require('./api-src/server.js');

const app = require('./auth-src/server.js');
const { authDB } = require('./auth-src/auth/models');

require('dotenv').config();

const PORT = process.env.PORT;
// const PORT_AUTH = process.env.PORT_AUTH;


apiDB.sync()
.then(authDB.sync()
.then(() => {
  server.start(PORT);
}));

// authDB.sync().then(() => {
//   app.start(PORT_AUTH);
// });