'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: { type: DataTypes.STRING, allowNull: false },
  calories: { type: DataTypes.NUMBER, allowNull: false },
  type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), required: true }
});

module.exports = foodModel;



// const clothesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
//   name: { type: DataTypes.STRING, required: true },
//   color: { type: DataTypes.STRING, required: true },
//   size: { type: DataTypes.STRING, required: true }
// });