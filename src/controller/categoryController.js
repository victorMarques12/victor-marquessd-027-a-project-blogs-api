const categoriesService = require('../services/categoryServices');

const create = async (req, res) => {
  const cate = await categoriesService.create(req.body);
  const { type, message, data } = cate;
  
  if (type) return res.status(type).json({ message });
  
  return res.status(201).json({ ...data });
};
const getAll = async (_req, res) => {
  const cate = await categoriesService.getAll();

  return res.status(200).json(cate);
};

module.exports = {
  create,
  getAll,
};