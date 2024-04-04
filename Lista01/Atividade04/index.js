const calculadora = require('./util/calculadora');
const express = require('express');
const app = express();

const PORT = 8080;

app.get('', function(req, res){
    res.send('Página Inicial da Calculadora')
})

app.get("/somar/:a/:b", function(req, res) {
    const result = parseFloat(req.params.a) + parseFloat(req.params.b);
    res.send(`= ${result}`);
});

app.get("/subtrair/:a/:b", function(req,res){
    const result = calculadora.subtrair(req.params.a, req.params.b);
    res.send(`= ${result}`);
})

app.get("/multiplicar/:a/:b", function(req,res){
    const result = calculadora.multiplicar(req.params.a, req.params.b);
    res.send(`= ${result}`);
})

app.get("/dividir/:a/:b", function(req,res){
    const result = calculadora.dividir(req.params.a, req.params.b);
    res.send(`= ${result}`);
})

app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})