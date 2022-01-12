'use strict';

const faker = require('faker');
const { QueryTypes } = require('sequelize');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersReader = await queryInterface.sequelize.query("SELECT * FROM users WHERE role = 'READER'", { type: QueryTypes.SELECT });

    let ordersData = [];
    let amountOrders = 3;
    

    for (let i = 0; i < usersReader.length; i++)
    {
      for (let j = 0; j < amountOrders; j++)
      {
        ordersData.push(
          {
            user_id: usersReader[i].id,
            dateTacking: randomDate(new Date(2018, 0, 1), new Date()).getTime(),
            dateReturned: Date.now(),
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        );
      }
    }

    

    return queryInterface.bulkInsert('orders', ordersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
