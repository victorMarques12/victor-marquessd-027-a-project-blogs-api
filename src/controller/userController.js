const userServices = require('../services/userServices');
const authFunctions = require('../auth/authFunctions');

const create = async (req, res) => {
  const user = await userServices.create(req.body);
  const { type, message, data } = user;
  if (type) return res.status(type).json({ message });

  const token = authFunctions.createToken(data);
  return res.status(201).json({ token });
};
const loginUser = async (req, res) => {
    const user = await userServices.login(req.body);
  
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
  
    const token = authFunctions.createToken(user);
    return res.status(200).json({ token });
  };

  const getAll = async (_req, res) => {
    const users = await userServices.getAll();
  
    return res.status(200).json(users);
  };
  
  const findById = async (req, res) => {
    const id = Number(req.params.id);
    const user = await userServices.findById(id);
    const { type = undefined, message = undefined } = user;
  
    if (type) return res.status(type).json({ message });
  
    return res.status(200).json(user);
  };
  const excluir = async (req, res) => {
    const userId = req.payload.data.id;
    await userServices.excluir(userId);
  
    return res.status(204).json();
  };

module.exports = {
    create,
    loginUser,
    getAll,
    findById,
    excluir,

};