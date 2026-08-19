// Importação do framework e das bibliotecas auxiliares
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Instanciação da aplicação principal
const app = express();

// Definição da porta de rede
const PORT = process.env.PORT || 3000;

// Configuração para o Express entender JSON no corpo das requisições
app.use(express.json());

// Configuração do CORS
app.use(cors());

// Rota de teste para ver se está funcionando
app.get('/', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: 'A API Connect está online e interpretando JSON corretamente!' 
    });
});

// Importa e usa as rotas de usuários
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); 


// Coloca o servidor para escutar na porta escolhida
app.listen(PORT, () => {
    console.log(`Servidor inicializado e escutando requisições na porta ${PORT}`);
});

