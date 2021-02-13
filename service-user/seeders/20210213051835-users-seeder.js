'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: "rafi",
        profession: "Super Admin",
        role: "admin",
        email: "muhamadrafipamungkas@gmail.com",
        password: await bcrypt.hash("BukanPassword", 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "kanna",
        profession: "Istri Admin",
        role: "student",
        email: "kanna@gmail.com",
        password: await bcrypt.hash("BukanPassword", 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
