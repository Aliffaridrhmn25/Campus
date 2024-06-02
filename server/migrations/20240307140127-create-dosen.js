"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("dosens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nmDosen: {
        type: Sequelize.STRING,
      },
      jkDosen: {
        type: Sequelize.STRING,
      },
      telpDosen: {
        type: Sequelize.STRING,
      },
      alamatDosen: {
        type: Sequelize.STRING,
      },
      mtKuliahDosen: {
        type: Sequelize.STRING,
      },
      jadwalDosen: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("dosens");
  },
};
