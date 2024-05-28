const calculadora = require('../calculadora/calculadora');

exports.renderIndex = (req, res) => {
    res.render('index.html');
};

exports.calcular = async (req, res) => {
    try {
        const { primeiroNumero, segundoNumero, operacao } = req.body;
        if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
            return res.render('index.html', { errorMessage: 'Você inseriu valores invalidos' });
        }
        const resultado = await calculadora.calcular(parseFloat(primeiroNumero), parseFloat(segundoNumero), operacao);
        return res.render('resultado.html', { primeiroNumero, segundoNumero, result: resultado });
    } catch (error) {
        console.error(error.message);
        return res.render('index.html', { errorMessage: 'Ocorreu algum erro.' });
    }
};
