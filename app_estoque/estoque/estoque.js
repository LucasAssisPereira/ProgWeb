let produtos = Array();

function criar_produto(id, nome, qtd) {
    let p ={
        id: id,
        nome: nome,
        qtd: qtd
    };
    return p;
}

function adicionar_produto(p){
    produtos.push(p);
}

function listar_produtos(){
    return produtos;
}

function editar_produto(id, qtdAtual){
    produtos.forEach(p=> {
        if(p.id == id){
            p.qtd = qtdAtual;
        }
    })
}

function remover_produto(id){
    let pRemovido;
    produtos.forEach(p=>{
        if(p.id == id){
            pRemovido = p
        }
    })
    produtos.p(pRemovido);
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}