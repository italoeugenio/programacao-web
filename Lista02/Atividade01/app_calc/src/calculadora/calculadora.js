exports.calcular = (num1, num2, operacao) => {
  let resultado;
  if (operacao === '+') {
    resultado = num1 + num2;
  } else if (operacao === '-') {
    resultado = num1 - num2;
  } else if (operacao === '*') {
    resultado = num1 * num2;
  } else if (operacao === '/') {
    resultado = num1 / num2;
  } else {
    throw new Error('ERRO: OPERAÇÃO INVÁLIDA');
  }
  return resultado;
};
