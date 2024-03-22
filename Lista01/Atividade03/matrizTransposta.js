function transporMatriz(A) {

    console.log("Matriz Original (2x3):");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }

    const matrizTransposta = [];

    for (let i = 0; i < A[0].length; i++) {
        const novaLinha = [];

        for (let j = 0; j < A.length; j++) {
            novaLinha.push(A[j][i]);
        }
        matrizTransposta.push(novaLinha);
    }

    console.log("Matriz Transposta (3x2):");
    for (let i = 0; i < matrizTransposta.length; i++) {
        console.log(matrizTransposta[i]);
    }
}

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);
