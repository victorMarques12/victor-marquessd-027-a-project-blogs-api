const userServices = require('../services/userServices');
const authFunctions = require('../auth/authFunctions');

const userCreate = async (req, res) => {
    const newUser = await userServices.userCreate(req.body);

    return res.status(201).json(newUser);
};
const loginUser = async (req, res) => {
    const user = await userServices.login(req.body);
  
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
  
    const token = authFunctions.createToken(user);
    return res.status(200).json({ token });
  };

module.exports = {
    userCreate,
    loginUser,
};