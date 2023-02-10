'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Customer, Good }) {
      // define association here
      this.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
      this.belongsTo(Good, { foreignKey: 'goods_id', as: 'goods' });
    }
  }
  review.init({
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goods_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },


  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
  });
  return review;
};