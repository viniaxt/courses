//Funcao sem retorno: recebe a e b e faz a soma dos valores
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()

// Funcao com retorno: retorna o resultado dessa funcao

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
