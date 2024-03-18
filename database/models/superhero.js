'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SUPERHERO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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