const calculadora = require('../calculadora/calculadora');

function validarNumeros(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return 'Insira valores válidos';
  }
  return true;
}

function calcularResultado(numero1, numero2, operacao) {
  return calculadora.calcular(Number(numero1), Number(numero2), operacao);
}

function prepararDadosParaRenderizacao(numero1, numero2, resultado) {
  return {
    primeiroNumero: numero1,
    segundoNumero: numero2,
    result: resultado
  };
}

exports.renderIndex = (req, res) => {
  res.render('index.html');
};

exports.calcular = (req, res) => {
  const { primeiroNumero, segundoNumero, operacao } = req.body;

  const validacao = validarNumeros(primeiroNumero, segundoNumero);
  if (validacao !== true) {
    res.render('index.html', { errorMessage: validacao });
    return;
  }

  const resultado = calcularResultado(primeiroNumero, segundoNumero, operacao);
  const dados = prepararDadosParaRenderizacao(primeiroNumero, segundoNumero, resultado);
  res.render('resultado.html', dados);
};
