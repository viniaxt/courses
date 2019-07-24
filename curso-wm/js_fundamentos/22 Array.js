// array é uma forma de agrupar multiplos valores de uma forma linear, como um vetor
// Voce acessa os elementos de um array a partir de um indice(0, 1, 2, ...)
// é representado por []

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores [4] = 10
console.log(valores[4])

console.log(valores.length) //quantidade de elementos dentro do array
valores.push({id: 3}, false, null, "teste")  //um array pode misturar dados
console.log(valores)

console.log(valores.pop()) //retira o ultimo valor do array
delete valores [0]  //deleta tal indice do array
valores [0] = 10000000
console.log(valores)

console.log(typeof valores) //array em JS é um objeto