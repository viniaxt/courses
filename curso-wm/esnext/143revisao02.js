//arrow function
const soma = (a, b) => a + b
console.log(soma(10, 3))

//arrow function e this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default
function log(texto = 'node') {
  console.log(texto)
}

log()
log('mais forte')

//operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(2, 3, 4, 5))