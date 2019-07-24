const nome = "vini"
const concatenacao = "olá " + nome + "!"
const template = `
olá
${nome}`
console.log(concatenacao, template)

// template string permite criar string multi linhas

//exemplo 1

var a = 5
var b = 10
console.log(`Quinze é ${a + b} e não ${2 * a + b}` )

//exemplo 2

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}`)

const template1 = `
    oi
    ${nome}!`
console.log(concatenacao, template1)

var x = 2
var y = 2
console.log(`2 + 2 é ${x + y} e não ${2 * x + y}`)



