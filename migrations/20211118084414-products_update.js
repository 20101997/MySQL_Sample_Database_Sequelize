'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('orders');
    
   // await queryInterface.renameColumn('products','productScale','productScale1');
  },

  down: async (queryInterface, Sequelize) => {
    
 
     await queryInterface.dropTable('orders');
    

  }
};
