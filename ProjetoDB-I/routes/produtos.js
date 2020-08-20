const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// listar produtos
router.get('/index', produtosController.index);

module.exports = router;