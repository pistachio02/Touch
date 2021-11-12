'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // await queryInterface.bulkInsert('Users', [{
    //   email: 'wiaptm0219@gmail.com',
    //   password: '12345',
    //   nickname: 'pistachio02',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Users', [{
    //   email: 'leejanghe@gmail.com',
    //   password: '12345',
    //   nickname: 'leejanghe',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Users', [{
    //   email: 'leegeonwoo@gmail.com',
    //   password: '12345',
    //   nickname: 'leegeonwoo',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Users', [{
    //   email: 'kimdongwoo@gmail.com',
    //   password: '12345',
    //   nickname: 'kimdongwoo',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
