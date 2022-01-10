'use strict';

const { data } = require('autoprefixer');
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const readingRooms = await queryInterface.sequelize.query("SELECT * FROM readingRooms", { type: QueryTypes.SELECT });

    let booksData = [];
    let booksAmount = 200; 

    for(let i = 0; i < booksAmount; i++)
    {
      booksData.push(
        {
          readingRooms_id: readingRooms[Math.floor(Math.random()*usersOwners.length)].id,
          bookName: faker.address.streetName(),
          yearPublishing: data.now() + 5,
          author: faker.name.findName(),
          createdAt: data.now(),
          updatedAt: data.now()
        }
      )
    }
    return queryInterface.bulkInsert('users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
