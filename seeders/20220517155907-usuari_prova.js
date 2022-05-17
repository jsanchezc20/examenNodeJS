'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('users',
	 [
		 {
			username: "Jaime",
			password: "jamón",
			email: "jaime@gmail.com"
	     },
		 {
			username: "Erik",
			password: "jabugo",
			email: "erik@gmail.com"
	     },
		 {
			username: "Marcello",
			password: "krellar",
			email: "marcello@gmail.com"
	     },
		 {
			username: "Marc",
			password: "molinoNuevo",
			email: "marc@gmail.com"
	     },
	
	], {});
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
