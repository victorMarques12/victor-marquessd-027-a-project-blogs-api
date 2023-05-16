const validalogin = async (req, res, next) => {
    const { email, password } = req.body;
    const regex = /^(?=.{1,256})(?=.{1,64}@)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const validaEmail = regex.test(email);
  
    if (!email || !password || !validaEmail) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }
  
    return next();
  };
  
  module.exports = validalogin;