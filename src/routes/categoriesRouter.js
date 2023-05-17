const express = require('express');

const validaToken = require('../middlewares/validaToken');
const categoryController = require('../controller/categoryController');
const validaNameCategory = require('../middlewares/validaNameCategory');

const router = express.Router();

router.get('/', validaToken, categoryController.getAll);
router.post('/', validaToken, validaNameCategory, categoryController.create);

module.exports = router;