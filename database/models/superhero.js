'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SUPERHERO extends Model {
    
    static associate(models) {
    }
  };
  SUPERHERO.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    appearance: DataTypes.TEXT,
    biography: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SUPERHERO',
  });
  return SUPERHERO;
};
