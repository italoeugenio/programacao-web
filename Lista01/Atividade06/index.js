const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
