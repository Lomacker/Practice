'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `CREATE TABLE orders (
        id int NOT NULL AUTO_INCREMENT,
        user_id int DEFAULT NULL,
        dateTacking bigint unsigned NOT NULL,
        dateReturned bigint unsigned DEFAULT NULL,
        createdAt bigint unsigned NOT NULL,
        updatedAt bigint unsigned NOT NULL,
        PRIMARY KEY (id),
        KEY fk_orders_users_idx (user_id),
        CONSTRAINT fk_orders_users FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL ON UPDATE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
