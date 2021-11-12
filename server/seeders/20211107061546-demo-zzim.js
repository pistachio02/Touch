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

    // await queryInterface.bulkInsert('Zzims', [{
    //   user_id: 1,
    //   healing_id: 0,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Zzims', [{
    //   user_id: 1,
    //   healing_id: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Zzims', [{
    //   user_id: 2,
    //   healing_id: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Zzims', [{
    //   user_id: 2,
    //   healing_id: 4,
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
