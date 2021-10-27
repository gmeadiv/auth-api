'use strict';

const user = require('../models/index.js')

const permissions = (capability) => {

  return (req, res, next) => {

    console.log(capability, '<-- CAPABILITY | USER CAPABILITY -->', user.capabilities)


    try {
      if (req.user.capabilities.includes(capability)) {
        next();
      }
      else {
        next('Access Denied');
      }
    } catch (e) {
      next('Invalid Login');
    }

  }

}

module.exports = permissions;
