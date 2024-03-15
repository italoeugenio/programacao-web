function verificarNumeroPrimo(numero) {

    let cont = 0;

    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            cont++;
        }
    } if (cont == 2) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false