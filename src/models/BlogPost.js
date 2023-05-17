/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const blogPost = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING
      },
      published: {
        allowNull: true,
        type: DataTypes.DATE
      },
      updated: {
        allowNull: true,
        type: DataTypes.DATE
      },
      userId: {
        allowNull: true,
        type: DataTypes.INTEGER
      },
      
    },{
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'blog_posts',
      underscored: true,
    });

    BlogPostTable.associate = (models) => {
      BlogPostTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  }

  
    return BlogPostTable;
  }
  
  module.exports = blogPost;