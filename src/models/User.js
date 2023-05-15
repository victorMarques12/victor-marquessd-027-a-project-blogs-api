/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const userModel = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      unique: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },

  },{
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'users',
    underscored: true,
  });

  return userTable;
}

module.exports = userModel;