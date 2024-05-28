exports.calcular = function(num1, num2, operacao) {

  if (!Number.isFinite(num1) ||!Number.isFinite(num2)) {
      throw new Error('Os valores devem ser números.');
  }

  let resultado;
  switch (operacao.toLowerCase()) { 
      case 'soma':
          resultado = num1 + num2;
          break;
      case 'subtracao':
          resultado = num1 - num2;
          break;
      case 'multiplicacao':
          resultado = num1 * num2;
          break;
      case 'divisao':
          if (num2!== 0) {
              resultado = num1 / num2;
          } else {
              throw new Error('Divisão por zero não é permitida.');
          }
          break;
      default:
          throw new Error('Operação inválida');
  }
  
  return resultado;
};
