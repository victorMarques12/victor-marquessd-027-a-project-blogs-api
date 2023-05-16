const { Op } = require('sequelize');
const { User } = require('../models');

const userCreate = async ({ displayName, email, password, image }) =>
User.create({ displayName, email, password, image });

const login = async ({ email, password }) => {
    const user = await User.findOne({ 
      where: { [Op.and]: [{ email }, { password }] },
    });
    return user ? user.dataValues : undefined;
  };

module.exports = {
    userCreate,
    login,
};