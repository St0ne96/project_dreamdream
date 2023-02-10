'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Customer, Good}) {
      // define association here
      this.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
      this.belongsTo(Good, { foreignKey: 'goods_id', as: 'goods' });
    }
  }
  order.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return order;
};