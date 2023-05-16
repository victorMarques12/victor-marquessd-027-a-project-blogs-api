const { Op } = require('sequelize');
const { User } = require('../models');

const create = async ({ displayName, email, password, image = '' }) => {
  const users = await User.findAll();

  const emailData = users.some((user) => user.email === email);

  if (emailData) return { type: 409, message: 'User already registered', data: null };

  const { dataValues } = await User.create({ displayName, email, password, image });
  return { type: null, message: 'OK', data: dataValues };
};
const login = async ({ email, password }) => {
  const user = await User.findOne({ 
    where: { [Op.and]: [{ email }, { password }] },
  });
  return user ? user.dataValues : undefined;
};
  const getAll = async () => {
    const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return users;
  };
  
  const findById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
    if (!user) return { type: 404, message: 'User does not exist' };
  
    return user;
  };

const excluir = async (userId) => {
  await User.destroy({
    where: {
      id: userId,
    },
  });
};

module.exports = {
    create,
    login,
    getAll,
    findById,
    excluir,
};