'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE orders (
      id int NOT NULL AUTO_INCREMENT,
      bookStorage_id int NOT NULL,
      userLibrary_id int NOT NULL,
      dateTacking date DEFAULT NULL,
      dateReturn date DEFAULT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      KEY fk_orders_bookStorages_idx (bookStorage_id),
      KEY fk_orders_usersLibrary_idx (userLibrary_id),
      CONSTRAINT fk_orders_bookStorages FOREIGN KEY (bookStorage_id) REFERENCES bookStorages (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT fk_orders_usersLibrary FOREIGN KEY (userLibrary_id) REFERENCES usersLibrary (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};

