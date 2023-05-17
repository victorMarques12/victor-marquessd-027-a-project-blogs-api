const express = require('express');

const validaToken = require('../middlewares/validaToken');
const validaValue = require('../middlewares/validaValue');
const validaCategory = require('../middlewares/validaCategory');
const validaPost = require('../middlewares/validaPost');
const postController = require('../controller/postController');

const router = express.Router();

router.get('/search', validaToken, postController.search);
router.get('/:id', validaToken, postController.findById);
router.get('/', validaToken, postController.getAll);
router.post(
    '/',
    validaToken,
    validaValue,
    validaCategory,
    postController.create,
);
router.delete(
    '/',
    validaToken,
    validaPost,
    postController.excluir,
);
module.exports = router;
