const express = require('express');
const userController = require('../controller/userController');
const validaToken = require('../middlewares/validaToken');
const validaName = require('../middlewares/validaName');
const validaEmail = require('../middlewares/validaEmail');
const validaPassword = require('../middlewares/validaPassword');

const routes = express.Router();

routes.post('/', validaPassword, validaName, validaEmail, userController.create);
routes.get('/:id', validaToken, userController.findById);
routes.get('/', validaToken, userController.getAll);
routes.delete('/me', validaToken, userController.excluir);

module.exports = routes;