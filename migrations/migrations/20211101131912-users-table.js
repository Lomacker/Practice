'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`

    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      firstName varchar(255) DEFAULT NULL,
      lastName varchar(255) DEFAULT NULL,
      role enum('ADMIN','MANAGER','STUDENT','TEACHER','READER') NOT NULL,
      email varchar(255) DEFAULT NULL,
      password varchar(255) DEFAULT NULL,
      status enum('GOOD','BAD','BANNED') NOT NULL,
      createdAt bigint NOT NULL,
      updatedAt bigint NOT NULL,
      PRIMARY KEY (id),
      UNIQUE KEY email_UNIQUE (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
