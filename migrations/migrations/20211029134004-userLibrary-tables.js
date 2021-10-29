'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
    
    CREATE TABLE userLibrary (
      userLibrary_id int NOT NULL AUTO_INCREMENT,
      user_id int NOT NULL,
      readingRoom_id int NOT NULL,
      numberCard int DEFAULT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (userLibrary_id),
      KEY usersLibrary_users_FK_idx (user_id),
      KEY usersLibrary_readingRooms_FK_idx (readingRoom_id),
      CONSTRAINT usersLibrary_readingRooms_FK FOREIGN KEY (readingRoom_id) REFERENCES readingRooms (readingRooms_id) ON DELETE CASCADE ON UPDATE CASCADE,
      CONSTRAINT usersLibrary_users_FK FOREIGN KEY (user_id) REFERENCES users (user_id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userLibrary');
  }
};
