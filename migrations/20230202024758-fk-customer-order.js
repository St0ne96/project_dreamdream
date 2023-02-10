'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orders', 'customer_id', {
      type : Sequelize.INTEGER,
      allowNull: false
    })
    await queryInterface.addConstraint('orders', {
      fields : ['customer_id'],
      type : 'foreign key',
      name : 'orders_customer_id_fk',
      references : {
        table : 'customers',
        field : 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'customer_id')
  }
};
