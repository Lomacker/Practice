'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE bookStorages (
      id int NOT NULL AUTO_INCREMENT,
      book_id int NOT NULL,
      readingRoom_id int NOT NULL,
      state enum('NEW','OLD','SHABBY') NOT NULL,
      status enum('IN_STOCK','ON_HANDS','DISAPPEARED') NOT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      KEY fk_bookStorages_books_idx (book_id),
      KEY fk_bookStorages_readingRooms_idx (readingRoom_id),
      CONSTRAINT fk_bookStorages_books FOREIGN KEY (book_id) REFERENCES books (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT fk_bookStorages_readingRooms FOREIGN KEY (readingRoom_id) REFERENCES readingRooms (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookStorages');
  }
};
