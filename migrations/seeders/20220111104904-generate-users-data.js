'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersRole = ["MANAGER", "READER"];

    let usersData = [];
    let amountReaders = 50;
    let amountManagers = 10;
    
    usersData.push(
      {
        firstName: "admin",
        lastName: "admin",
        role: "ADMIN",
        email: "admin",
        password: "admin",
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    );

    for (let i = 0; i < amountManagers; i++)
    {
      usersData.push(
        {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          role: "MANAGER",
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      );
    }

    for (let i = 0; i < amountReaders; i++) {
      usersData.push(
        {
          firstName: faker.name.firstName(), 
          lastName: faker.name.lastName(),
          role: /*faker.random.arrayElement(usersRole)*/"READER",
          email: faker.internet.email(),
          password: faker.internet.password(),
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      );
    }

    return queryInterface.bulkInsert('users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('users', null, {});
  }
};
