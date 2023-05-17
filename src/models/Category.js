/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const Category = (sequelize, DataTypes) => {
    const CategotyTable = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
  
    },{
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Category',
      underscored: true,
    });
  
    return CategotyTable;
  }
  
  module.exports = Category;