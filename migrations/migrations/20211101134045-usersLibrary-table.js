'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE usersLibrary (
      id int NOT NULL AUTO_INCREMENT,
      user_id int NOT NULL,
      readingRoom_id int NOT NULL,
      numberCard int DEFAULT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      KEY fk_usersLibrary_users_idx (user_id),
      KEY fk_usersLibrary_readingRooms_idx (readingRoom_id),
      CONSTRAINT fk_usersLibrary_readingRooms FOREIGN KEY (readingRoom_id) REFERENCES readingRooms (id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT fk_usersLibrary_users FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usersLibrary');
  }
};
