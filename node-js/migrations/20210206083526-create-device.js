'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      os: {
        allowNull: false,
        type: Sequelize.STRING
      },
      manufacturer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      isCheckedOut: {
        type: Sequelize.BOOLEAN
      },
      lastCheckedoutBy: {
        type: Sequelize.STRING
      },
      addedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      lastCheckedOutDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Devices');
  }
};