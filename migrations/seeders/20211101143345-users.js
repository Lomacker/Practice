'use strict';

const faker = require('faker');


const usersRole = ["ADMIN", "MANAGER", "STUDENT", "TEACHER", "READER"];
const usersStatus = ["GOOD", "BAD", "BANNED"];

const accidentsBookState = ["REPLACEMENT", "MONEY", "RESTORATION"];
const accidentsStatus = ["DECIDED", "IN_PROCESS", "IGNORE"];

const bookStoragesState = ["NEW", "OLD", "SHABBY"];
const bookStoragesStatus = ["IN_STOCK","ON_HANDS", "DISAPPEARED"];

module.exports = {
  up: (queryInterface, Sequelize) => {

    let usersData = [];
    let amount = 50;

    for(let step = 0; step < amount; step++)
    {
      usersData.push(
        {
          id: step + 1,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          role: faker.random.arrayElement(usersRole),
          email: faker.internet.email(),
          password: faker.internet.password(),
          status: faker.random.arrayElement(usersStatus),
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      )
    }

    queryInterface.bulkInsert('users', usersData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
