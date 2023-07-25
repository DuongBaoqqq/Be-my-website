'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'admin@gmail.com',
      passWord: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 3
    },
    {
      firstName: 'Duong',
      lastName: 'Bao',
      email: 'customer@gmail.com',
      passWord: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
      roleId: 1
      },
      {
        firstName: 'Park',
        lastName: 'Jimin',
        email: 'seller@gmail.com',
        passWord: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 2
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
