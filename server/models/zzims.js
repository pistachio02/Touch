'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zzims extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Zzims.init({
    user_id: DataTypes.INTEGER,
    healing_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Zzims',
  });
  return Zzims;
};