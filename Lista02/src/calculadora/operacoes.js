const operacoes = {
    '+': require('./calculadora').somar,
    '-': require('./calculadora').subtrair,
    '*': require('./calculadora').multiplicar,
    '/': require('./calculadora').dividir,
  };
  
  module.exports = operacoes;
  