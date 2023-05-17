const validaNameCategory = async (req, res, next) => {
    const { name } = req.body;
    const valida = name !== undefined && name !== '';
  
    if (valida) return next();
  
    return res.status(400).json({ message: '"name" is required' });
  };
  
  module.exports = validaNameCategory;