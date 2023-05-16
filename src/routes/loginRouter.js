const express = require('express');
const userController = require('../controller/userController');
const validaLogin = require('../middlewares/validaLogin');
const validaValue = require('../middlewares/validaValue');

const router = express.Router();

router.post('/', validaValue, validaLogin, userController.loginUser);

module.exports = router;