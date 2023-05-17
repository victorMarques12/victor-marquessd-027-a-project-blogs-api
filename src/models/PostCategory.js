/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const postCategory = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      
    },{
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'posts_categories',
      underscored: true,
    });

    PostCategoryTable.associate = ({ BlogPost, Category }) => {
        BlogPost.belongsToMany(Category, {
          as: 'categories',
          through: PostCategoryTable,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
    
        Category.belongsToMany(BlogPost, {
          as: 'blog_posts',
          through: PostCategoryTable,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
      }
  
    return PostCategoryTable;
  }
  
  module.exports = postCategory;