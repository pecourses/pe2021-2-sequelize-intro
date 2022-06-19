'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Students',
      [
        {
          firstName: 'John',
          lastName: ' Doe',
          email: 'test@test.test',
          birthday: '2000-01-12',
          isMale: true,
          activitiesCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jane',
          lastName: ' Doe',
          email: 'test1@test.test',
          birthday: '2000-08-12',
          isMale: false,
          activitiesCount: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
