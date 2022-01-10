'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'admin'", { type: QueryTypes.SELECT });

    let readingRoomsData = [];
    let readingRoomsAmount = 10;


    

    return queryInterface.bulkInsert('readingRooms', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('readingRooms', null, {});
  }
};
