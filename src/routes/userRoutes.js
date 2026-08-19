const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a rota GET para a raiz (listagem geral)
router.get('/', userController.listarUsuarios);

// Define a rota POST para a raiz (cadastro de usuário)
router.post('/', userController.criarUsuario);

// Define a rota GET para busca específica (COLE AQUI!)
router.get('/:id', userController.buscarUsuarioPorId);

module.exports = router;



