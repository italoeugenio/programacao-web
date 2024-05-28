function somar(num1, num2) {
    return num1 + num2;
  }
  
  function subtrair(num1, num2) {
    return num1 - num2;
  }
  
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  function dividir(num1, num2) {
    if (num2 === 0) {
      throw new Error('Não é possível dividir por zero.');
    }
    return num1 / num2;
  }
  
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
  };
  