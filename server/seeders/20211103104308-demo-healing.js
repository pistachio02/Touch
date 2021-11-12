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

    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/1.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/1.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/2.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/2.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/3.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/3.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/4.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/4.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/5.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/5.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/6.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/6.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/7.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/7.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/8.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/8.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/9.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/9.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/10.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/10.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/11.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/11.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/12.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/12.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/13.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/13.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/14.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/14.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/img/15.mp4',
    //   sound: 'https://touch-img-sound.s3.ap-northeast-2.amazonaws.com/sound/15.mp3',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {})


    
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/0Woman.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/0HIGH-FLY(LoFiBoomBapTypeBeat).m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/1Disco+Ball.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/1Scream-My-Name.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/2Girl.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/2Kiss-Sweet.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/3People.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/3YOUNG-DAYS.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/4Coastline.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/4MEANINGFUL.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/5Happy+New+Year.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/5Tonopas.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/6Korea.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/6Freedom%5BInspiring+Piano+And+Strings%5D.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/7Model.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/7Love-One-More.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/8Photographer.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/8Breathing-Beach.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {}),
    // await queryInterface.bulkInsert('Healings', [{
    //   image: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/9Pizza.mp4',
    //   sound: 'https://touchimagesound.s3.ap-northeast-2.amazonaws.com/9Tonopas.m4a',
    //   title: '테스트중',
    //   content: '테스트중',
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
