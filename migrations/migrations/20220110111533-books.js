'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `CREATE TABLE books (
      id int NOT NULL AUTO_INCREMENT,
      order_id int DEFAULT NULL,
      bookName varchar(255) DEFAULT NULL,
      author varchar(255) DEFAULT NULL,
      yearPublishing bigint unsigned DEFAULT NULL,
      image varchar(300) DEFAULT NULL,
      status enum('IN_STOCK','MISSING') NOT NULL,
      createdAt bigint unsigned NOT NULL,
      updatedAt bigint unsigned NOT NULL,
      PRIMARY KEY (id),
      KEY fk_books_orders_idx (order_id),
      CONSTRAINT fk_books_orders FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE SET NULL ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
