'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
