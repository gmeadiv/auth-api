
   
'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const v1Routes = require('./routes/v1.js');
const { authRouter } = require('./routes/v2.js');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1', v1Routes);
app.use('/api/v2', authRouter);


// app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: PORT => {
    if (!PORT) { throw new Error('Missing PORT'); }
    app.listen(PORT, () => console.log(`API Server Up on ${PORT}`));
  },
};