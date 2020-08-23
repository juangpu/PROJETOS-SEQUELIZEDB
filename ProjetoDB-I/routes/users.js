var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.index);
router.get('/ver/:id', userController.findById);
router.get('/search', userController.search);
router.get('/agregacoes', userController.agregadores);
router.get('/cadastro', userController.create);
router.post('/cadastro', userController.store);
router.get('/criacao', userController.bulkCreate);

module.exports = router;
