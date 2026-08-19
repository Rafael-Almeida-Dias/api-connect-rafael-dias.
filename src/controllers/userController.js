// Arquivo: src/controllers/userController.js

// Importa o arquivo de dados que contém o nosso array em memória e a geração de ID
const userModel = require('../models/userModel');

module.exports = {
    // ==========================================
    // LISTAGEM GERAL DE USUÁRIOS (GET)
    // ==========================================
    listarUsuarios: (req, res) => {
        // Busca a coleção completa de usuários no modelo
        const users = userModel.getUsers();
        
        // Retorna o status 200 (OK) e a lista em formato JSON
        return res.status(200).json({
            success: true,
            data: users
        });
    },

    
    // ==========================================
    // CADASTRO DE NOVO USUÁRIO (POST)
    // ==========================================
    criarUsuario: (req, res) => {
        // 1. Extração dos dados enviados no corpo da requisição (JSON)
        const { name, email, role } = req.body;

        // 2. Validação rigorosa: inspeciona a presença estrutural dos campos essenciais
        if (!name || !email) {
            // Interrompe o fluxo e retorna 400 (Bad Request) com o envelope padronizado de erro
            return res.status(400).json({ 
                error: 'Falha na validação: Os campos "name" e "email" são estritamente obrigatórios para efetuar o cadastro.' 
            });
        }

        // 3. Aciona o modelo para instanciar o registro na estrutura em memória
        const newUser = userModel.createUser({ 
            name, 
            email, 
            role: role || 'standard_user' 
        });

        // 4. Retorna status 201 (Created) com o envelope padronizado de sucesso
        return res.status(201).json({
            data: newUser
        });
    },

    
    // ==========================================
    // BUSCA ESPECÍFICA DE USUÁRIO (GET POR ID)
    // ==========================================
    buscarUsuarioPorId: (req, res) => {
        // Extrai o parâmetro dinâmico da URL (ex: /api/users/123)
        const { id } = req.params;

        // Aciona o modelo para localizar o registro no array em memória
        const user = userModel.getUserById(id);

        // Tratamento de resiliência: se a busca retornar vazio (undefined), emite o erro 404
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Erro 404: Usuário não encontrado no sistema.'
            });
        }

        // Caso o usuário seja localizado, retorna o status 200 (OK) e o objeto JSON
        return res.status(200).json({
            success: true,
            data: user
        });
    },

};
