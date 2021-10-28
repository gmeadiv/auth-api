'use strict';

/*
  In this example, we first declare a funcion and then explicitly export it
  Because we'll be building out an API that works with JSON, let's format
  our response as a JSON object
*/

module.exports = function (req, res, next) {

  const errorObject = {
    status: 404,
    message: 'Sorry, we could not find what you were looking for'
  };

  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(errorObject));
  res.end();
};