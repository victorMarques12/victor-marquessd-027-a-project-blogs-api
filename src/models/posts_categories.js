'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  posts_categories.init({
    post_id: DataTypes.BOOLEAN,
    category_id: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'posts_categories',
  });
  return posts_categories;
};