'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  auto.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'auto',
    tableName: 'autos' // If you want to change the table name, you can do so here.
  });
  return auto;
};