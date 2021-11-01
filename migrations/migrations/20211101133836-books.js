'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE books (
      id int NOT NULL AUTO_INCREMENT,
      readingRooms_id int NOT NULL,
      bookName varchar(255) DEFAULT NULL,
      yearPublishing date DEFAULT NULL,
      author varchar(255) DEFAULT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      KEY fk_books_readingRooms_idx (readingRooms_id),
      CONSTRAINT fk_books_readingRooms FOREIGN KEY (readingRooms_id) REFERENCES readingRooms (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};

