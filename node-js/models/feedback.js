'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feedback.belongsTo(models.Device, {
        foreignKey: 'deviceId',
      })
    }
  };
  Feedback.init({
    deviceId: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    checkedUser: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      notNull: true,
    }
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};