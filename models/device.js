"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.hasMany(models.Feedback, {
        foreignKey: 'deviceId',
      })
    }
  }
  Device.init(
    {
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
      lastCheckedOutDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn("NOW"),
        validate: {
          isValidTime(value) {
            const currentHour = value.getHours();
            if (
              this.lastCheckedoutBy &&
              !(currentHour > 9 && currentHour < 17)
            ) {
              throw new Error(
                "lastCheckedOutDate must be between 9:00 AM to 5:00 PM"
              );
            }
          },
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      sequelize,
      validate: {
        async checkMaxDeviceCount() {
          const count = await sequelize.models.Device.count();
          if (count === 10) {
            throw new Error("Maximum 10 devices can be added");
          }
        },
      },
      modelName: "Device",
    }
  );
  return Device;
};
