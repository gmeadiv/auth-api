'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const clothes = clothesModel(sequelize, DataTypes);
const food = foodModel(sequelize, DataTypes);

module.exports = {
  apiDB: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
};