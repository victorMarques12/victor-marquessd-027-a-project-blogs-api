const express = require('express');
const userController = require('../controller/userController');

const routes = express.Router();

routes.post('/', userController.userCreate);

module.exports = routes;