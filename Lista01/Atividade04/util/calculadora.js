function somar(a,b){
    return a + b
}

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Não existe divisão por 0");
        return undefined; 
    }
}

module.exports = {
    somar, subtrair, multiplicar, dividir  
}