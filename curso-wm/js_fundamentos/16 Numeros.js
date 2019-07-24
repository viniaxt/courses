const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1 ,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// isInteger diz se o valor numerico é inteiro ou nao

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))

//toFixed imprime a quantidade de casas decimais que voce quer 

console.log(media.toString(2))

// toString imprime o valor binario do resultado

console.log(typeof media)
console.log(typeof Number)

console.log(peso1.toFixed(2))

// number é um numero, e Number é uma funcao