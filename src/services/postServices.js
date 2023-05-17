const { Op } = require('sequelize');
const { User, Category, BlogPost, PostCategory, sequelize } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
    ], 
  });

  return posts;
};

const findById = async (postId) => {
  const todosPost = await BlogPost.findByPk(
    postId, 
    { include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
      ],
    },
);
  if (!todosPost) return { type: 404, message: 'Post does not exist', data: null };

  return { type: null, message: 'OK', data: todosPost };
};

const create = async ({ title, content, categoryIds, userId }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const date = new Date();
      const { dataValues } = await BlogPost.create({ 
        title, content, userId, published: date, updated: date }, { transaction: t });
        const postId = dataValues.id;

      await Promise.all(categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId, categoryId }, { transaction: t });
      }));
      return dataValues;
    });
    return { type: null, message: 'OK', data: result };
  } catch (error) { return { type: 500, message: 'Internal server error', data: null }; }
};

const update = async (postId, { title, content }) => {
  try {
    await BlogPost.update({ title, content }, {
      where: {
        id: postId,
      },
    });
    const result = await BlogPost.findByPk(postId, {
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category,
        as: 'categories',
        through: { attributes: [] } },
      ],
    });
    return { type: null, message: 'OK', data: result };
  } catch (error) {
    return { type: 500, message: 'Internal server error' };
  }
};

const excluir = async (postId) => {
  try {
    const result = await BlogPost.destroy({
      where: {
        id: postId,
      },
    });
    return { type: null, message: 'OK', data: result };
  } catch (error) {
    return { type: 500, message: 'Internal server error', data: null };
  }
};

const search = async (query) => {
  const result = await BlogPost.findAll(
  {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category,
        as: 'categories',
        through: { attributes: [] } },
    ],
    where: {
      [Op.or]: [{ title: { [Op.like]: `%${query}%` } }, 
        { content: { [Op.like]: `%${query}%` } }], 
    },
  },
);

  return result;
};

module.exports = { 
  create,
  getAll,
  findById,
  update,
  excluir,
  search,
};