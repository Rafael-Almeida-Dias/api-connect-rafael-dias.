// Arquivo: src/models/userModel.js

// Importação do módulo nativo do Node.js para geração de chaves e IDs
const crypto = require('crypto');

// Inicialização da estrutura de persistência provisória (Array em memória)
// Este array manterá o estado dos usuários enquanto o servidor estiver em execução
let users = [];

// Objeto exportado contendo o array e a demonstração da técnica de ID
module.exports = {
    // Retorna o estado atual do array
    getUsers: () => users,
    
    // Busca um usuário específico pelo seu ID
    getUserById: (id) => users.find(user => user.id === id),

    // Demonstração da técnica escolhida para gerar IDs únicos na criação de um usuário
    createUser: (userData) => {
        const newUser = {
            id: crypto.randomUUID(), // Técnica: Geração de identificador universal único (UUID)
            ...userData              // Espalha os dados recebidos (name, email, etc.)
        };
        
        users.push(newUser);
        return newUser;
    }
};
