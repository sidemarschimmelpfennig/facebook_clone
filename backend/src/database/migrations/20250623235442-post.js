'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('posts', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text:{
        type:Sequelize.STRING,
        allowNull: false
      },
      picture:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,   
      },
      updatedAt: {
        type:Sequelize.DATE,
        allowNull: false
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('posts')
  }
};
