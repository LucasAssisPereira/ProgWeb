const express = require('express');
const estoque = require('./estoque/estoque')
const app = express();

app.get("/", function(req, res){
    res.send("API estoque");
})

app.get("/api/adicionar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let p = estoque.criar_produto(id, nome, qtd);
    estoque.adicionar_produto(p);
    res.json(p);
})

app.get("/api/listar", function(req, res){
    res.json(estoque.listar_produtos());
})

app.get("/api/editar/:id/:qtdAtual" , function(req,res){
    res.json(estoque.editar_produto(id, qtdAtual));
})

app.get("/api/remover/:id", function(res, res){
    res.json(estoque.remover_produto(id));
})

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta -> " + PORT);
});