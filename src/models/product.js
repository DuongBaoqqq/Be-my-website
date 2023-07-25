'use strict';
import { Model } from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: 'sellerId' });
    }
  }
  Product.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      sellerId: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};