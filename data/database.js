let categorias = [
    { id: 1, nome: "Temakis" },
    { id: 2, nome: "Combinados" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesas" }
];

let produtos = [
    { 
      categoriaId:1,
      nome: "Temaki Completo",
      descricao: "Temaki com salmão, atum, kani, cream cheese e cebola crispy", 
      preco: 35.50,
      imagem: "https://cdn.neemo.com.br/uploads/item/photo/2009270/202204141116_Y4RJ_i.webp" 
    },
    { 
        categoriaId:2,      
        nome: "Combinado 20 peças",
        descricao: "Combinado com 20 peças variadas de sushi e sashimi", 
        preco: 85.00,
        imagem: "https://imagens.jotaja.com/produtos/c71b79fd-2f41-485e-91b2-6c7b0bfe170f.jpg"
    },
    { 
        categoriaId:3, 
        nome: "Refrigerante",
        descricao: "Refrigerante Coca-Cola 350ml", 
        preco: 8.00,
        imagem: "https://carrefourbrfood.vtexassets.com/arquivos/ids/119765719/coca-cola-lata-350-ml-1.jpg?v=638224488171270000"
    },
    { 
        categoriaId:4, 
        nome: "Mochi de Morango", 
        descricao: "Bolinho de arroz glutinoso recheado sabor morango",
        preco: 12.00,
        imagem: "https://cdn.dlojavirtual.com/static1/108009/sku/alimentos-bomboniere-bolinho-de-arroz-mochi-sabor-cacau-e-morango-80-gramas-1747939923565.jpg"
    }
];

module.exports = { categorias, produtos };