"use strict"; // 'use strict';
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert("Profiles", [{
    userId: 1,
    age: 18,
    gender: "Female",
    address: "Kigali",
    education: "High School",
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    userId: 2,
    age: 20,
    gender: "Male",
    address: "USA",
    education: "University",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Profiles", null, {})
};