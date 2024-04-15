let produtos = [];

function criarProduto(id, nome, qtd){
    let produto = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return produto
}

function listarProdutos(){
    return produtos;
}

function adicionarProduto(produto){
    produtos.push(produto);
}

function removerProduto(id){
    produtos = produtos.filter(function(produto){
        return produto.id != id;
    })
}

function editarProduto(id, qtd){
    produtos.forEach(produto => {
        if(produto.id == id){
            produto.qtd = qtd
        }
    });
}

module.exports = {
    criarProduto, listarProdutos, adicionarProduto, removerProduto, editarProduto
}
