const express = require('express');
const app = express();
const PORT = 8080;
const estoque = require("./src/estoque")

app.listen(PORT, function(){
    console.log("Aplicativo rodando na porta " + PORT);
});

app.get("/", function(req, res){
    res.send("Página Inicial");
});

app.get("/adicionar/:id/:nome/:qtd", function(req, res){
    let produto = estoque.criarProduto(req.params.id, req.params.nome, req.params.qtd);
    estoque.adicionarProduto(produto);
    res.send("Produto adicionado ao estoque.");
});

app.get("/listar", function(req, res){
    let produtos = estoque.listarProdutos();
    res.send(produtos);
});

app.get("/remover/:id", function(req, res){
    const id = req.params.id;
    estoque.removerProduto(id);
    res.send("Produto removido do estoque.");
});

app.get("/editar/:id/:qtd", function(req, res){
    const id = req.params.id;
    const qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);
    res.send("Quantidade do produto editada.");
});
