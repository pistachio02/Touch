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

    // await queryInterface.bulkInsert('Posts', [{
    //   title: '게시글1제목',
    //   content: '게시글1본문',
    //   user_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {})

    // await queryInterface.bulkInsert('Posts', [{
    //   title: '게시글2제목',
    //   content: '게시글2본문',
    //   user_id: 2,
    //   createdAt: NOW(),
    //   updatedAt: NOW()
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
