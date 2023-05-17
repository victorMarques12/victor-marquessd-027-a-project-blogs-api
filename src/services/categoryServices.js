const { Category } = require('../models');

const create = async ({ name }) => {
  const cate = await Category.findAll();
  
  const noCategory = cate.some((category) => category.name === name);
  
  if (noCategory) return { type: 409, message: 'Category already registered', data: null };
  
  const { dataValues } = await Category.create({ name });
  
  return { type: null, message: 'OK', data: dataValues };
};
const getAll = async () => {
  const cate = await Category.findAll();

  return cate;
};

module.exports = {
  getAll,
  create,
};