const express = require('express');
const cors = require('cors');

// Importando nossos Middlewares customizados
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares Globais
app.use(cors());
app.use(express.json());

// Nosso Middleware de Log!
app.use(logger);

// Rota de teste
app.get('/', (req, res) => {
    res.json({ mensagem: '🍣 Bem-vindo a API do Haruy Sushi!' });
});

// Importando rotas
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');

// Utilizando rotas
app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);

// Tratamento de Rotas não encontradas (Erro 404)
app.use((req, res, next) => {
    res.status(404).json({ mensagem: "Rota não encontrada na API do Haruy Sushi." });
});

// MIDDLEWARE DE ERROS GLOBAL (Sempre no final!)
app.use(errorHandler);

// Iniciar o servidor
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORTA}`);
});