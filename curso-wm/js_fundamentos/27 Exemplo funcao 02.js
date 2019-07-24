// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenar uma funcao arrow em uma variavel (Arrow =>)
const soma = (a, b) => {
    return a + b
}

console.log(2, 3)

//Retorno Implicito: + simples
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!!")






//Brainstorm

var sinalverde = function (a, b) {
    if (a = b)
        console.log("O sinal esta vermelho")
    else
        console.log("O sinal esta verde")   
}


