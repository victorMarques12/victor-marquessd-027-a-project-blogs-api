const postService = require('../services/postServices');

const findById = async (req, res) => {
    const postId = Number(req.params.id);
    
    const { type, message, data } = await postService.findById(postId);
    
    if (type) return res.status(type).json({ message });
    
    return res.status(200).json(data);
};
const getAll = async (_req, res) => {
  const todosPosts = await postService.getAll();

  return res.status(200).json(todosPosts);
};

const create = async (req, res) => {
  const post = req.body;
  const postId = req.payload.data.id;

  const { type, message, data } = await postService.create({ ...post, postId });

  if (type) return res.status(type).json({ message });

  return res.status(201).json(data);
};

const update = async (req, res) => {
  const postId = Number(req.params.id);
  const { type, message, data } = await postService.update(postId, req.body);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(data);
};

const excluir = async (req, res) => {
  const postId = Number(req.params.id);
  const { type, message, data } = await postService.exclude(postId);

  if (type) return res.status(type).json({ message });
  if (data === 0) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(204).json();
};

const search = async (req, res) => {
  const { q } = req.query;
  const result = await postService.search(q);

  return res.status(200).json(result);
};

module.exports = { 
  create,
  getAll,
  findById,
  update,
  excluir,
  search,
};