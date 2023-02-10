'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Review, Cart, Order}) {
      // define association here
      this.hasMany(Review, { foreignKey: 'customer_id', as: 'reviews' });
      this.hasMany(Cart, { foreignKey: 'customer_id', as: 'carts' });
      this.hasMany(Order, { foreignKey: 'customer_id', as: 'orders' });
    }
  }
  customer.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return customer;
};