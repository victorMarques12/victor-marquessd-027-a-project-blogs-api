/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const userModel = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,

  },{
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'users',
    underscored: true,
  });

  return userTable;
}

module.exports = userModel;