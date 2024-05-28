const operacoes = require('./operacoes');
const resultado = require('./resultado');

const calcular = (req, res) => {
  const num1Str = req.body.num1;
  const num2Str = req.body.num2;
  const operador = req.body.operador;

  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1) || isNaN(num2)) {
    res.render('index.html', { erro: 'Valor inválido!' });
    return;
  }

  try {
    const resultadoOperacao = operacoes[operador](num1, num2);
    resultado.salvarResultado(resultadoOperacao);
    res.redirect('/resultado');
  } catch (error) {
    res.redirect('/erro');
  }
};

module.exports = {
  calcular,
};
