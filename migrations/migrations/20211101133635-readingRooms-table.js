'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE readingRooms (
      id int NOT NULL AUTO_INCREMENT,
      ownerUser_id int NOT NULL,
      title varchar(255) DEFAULT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      KEY fk_readingRooms_users_idx (ownerUser_id),
      CONSTRAINT fk_readingRooms_users FOREIGN KEY (ownerUser_id) REFERENCES users (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('readingRooms');
  }
};