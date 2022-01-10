'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {


    const users = await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'admin'", { type: QueryTypes.SELECT });
    const readingRooms = await queryInterface.sequelize.query("SELECT * FROM readingRooms", { type: QueryTypes.SELECT });

    let usersLibraryData = [];
    let usersLibraryAmount = 200;

    

    for(let i = 0; i < usersLibraryAmount; i++)
    {
      usersLibraryData.push(
        {
          user_id: users[Math.floor(Math.random()*usersOwners.length)].id,
          readingRoom_id: readingRooms[Math.floor(Math.random()*usersOwners.length)].id,
          numberCard: 
        }
      )
    }

    return queryInterface.bulkInsert('users', usersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkdDelete('users', null, {});
  }
};
