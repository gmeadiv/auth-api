
   
'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const v1Routes = require('./routes/v1.js');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1', v1Routes.handleGetAll);

// app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) { throw new Error('Missing PORT'); }
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};