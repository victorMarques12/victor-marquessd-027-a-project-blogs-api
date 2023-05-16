const validavalue = async (req, res, next) => {
    const { body } = req;
    const valida = Object.values(body).every((value) => value !== undefined && value !== '');
  
    if (valida) return next();
  
    return res.status(400).json({ message: 'Some required fields are missing' });
  };
  
  module.exports = validavalue;