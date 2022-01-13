'use strict';

const faker = require('faker');
const { QueryTypes } = require('sequelize');

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = await queryInterface.sequelize.query("SELECT * FROM orders", { type: QueryTypes.SELECT });

    const booksStatus = ["IN_STOCK", "MISSING"];

    let booksData = [];
    let amountBooks = 3;
    
    for(let i = 0; i < orders.length; i++)
    {
      for(let j = 0; j < amountBooks; j++)
      {
        booksData.push(
          {
            order_id: orders[i].id,
            bookName: faker.address.city(),
            author: faker.name.findName(),
            yearPublishing: randomDate(new Date(2000, 0, 1), new Date()).getTime(),
            status: faker.random.arrayElement(booksStatus),
            image: `https://robohash.org/${i}${j}.png?set=set4`,
            createdAt: Date.now(),
            updatedAt: Date.now()
          }
        );
      }
    }

    return queryInterface.bulkInsert('books', booksData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {});
  }
};
