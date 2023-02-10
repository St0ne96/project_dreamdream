'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('carts', 'goods_id', {
      type : Sequelize.INTEGER,
      allowNull: false
    })
    await queryInterface.addConstraint('carts', {
      fields : ['goods_id'],
      type : 'foreign key',
      name : 'carts_goods_id_fk',
      references : {
        table : 'goods',
        field : 'id'
      },
      onDelete : 'cascade',
      onUpdate : 'cascade'
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('carts', 'goods_id')
  }
};
