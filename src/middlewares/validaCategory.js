const categoriesService = require('../services/categoryServices');

const validaCategories = async (req, res, next) => {
  const { categoryIds } = req.body;  
  const cate = await categoriesService.getAll();
  const id = cate.map((category) => category.id);

  const categoryValida = categoryIds.every((category) => id.includes(category));
  if (!categoryValida || !Array.isArray(categoryIds)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  return next();
};

module.exports = validaCategories;