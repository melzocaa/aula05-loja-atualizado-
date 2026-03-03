const express = require('express');
const app = express();
app.use(express.json());

let produtos = [
    { id:1,  categorias: "Temakis", nome: "Temaki Completo", preco: 35.50},
    { id:2, categorias: "Sushi",     nome: "Combinado 20 peças", preco: 85.00},
    { id:3, categorias: "Bebidas", nome: "Refrigerante", preco: 8.00},
    { id:4, categorias: "Sobremesa", nome: "Mochi de Morango", preco: 12.00},
];

// array de categorias
let categorias = [
    { id: 1, nome: "Bebidas" },
    { id: 2, nome: "Sushi" },
    { id: 3, nome: "Temakis" },
    { id: 4, nome: "Sobremesa" },
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
})

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    const novoProduto ={ id: produtos.length + 1, nome, preco};
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const { nome, preco } = req.body;
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Produto não encontrado' });
    produtos[index] = { id, nome: nome ?? produtos[index].nome, preco: preco ?? produtos[index].preco };
    res.json(produtos[index]);
    
});

app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({ error: 'Produto não encontrado' });
    const removido = produtos.splice(index,1)[0];
    res.json(removido);
});

// rotas para categorias
app.get('/categorias', (req, res) => {
    res.json(categorias);
});

app.post('/categorias', (req, res) => {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ error: 'Nome é obrigatório' });
    const novaCategoria = { id: categorias.length + 1, nome };
    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
});

// rota para filtrar produtos por categoria
app.get('/produtos/categoria/:nome', (req, res) => {
    const nome = req.params.nome.toLowerCase();
    const filtrados = produtos.filter(p => p.categoria && p.categoria.toLowerCase() === nome);
    res.json(filtrados);
});

app.listen(3000, () => console.log ("http://localhost:3000"));