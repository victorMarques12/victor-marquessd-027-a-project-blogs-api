const authFunctions = require('../auth/authFunctions');

const validaToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const data = authFunctions.verifyToken(token);
    req.payload = data;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validaToken;