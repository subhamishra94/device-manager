'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Device.init({
    device: {
      type: DataTypes.STRING,
      notNull: true,
    },
    os: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    isCheckedOut: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lastCheckedoutBy: DataTypes.STRING,
    lastCheckedOutDate: DataTypes.DATE,
    addedAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    // validate: {
    //   wrongCheckoutTime(value) {
    //     if (!this.isNewRecord && this.lastCheckedoutBy && this.lastCheckedOutDate) {
    //       throw new Error('lastCheckedOutDate must be present and between 9:00 AM to 5:00 PM');
    //     }
    //   }
    // },
    modelName: 'Device',
  });
  return Device;
};