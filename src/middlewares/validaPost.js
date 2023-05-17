const postService = require('../services/postServices');

const autorValida = async (req, res, next) => {
  const user = req.payload.data.id;
  const post = Number(req.params.id);
  const result = await postService.findById(post);

  if (result.type === 404) return res.status(404).json({ message: 'Post does not exist' });

  if (user !== result.data.dataValues.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};

module.exports = autorValida;