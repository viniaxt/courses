/**
 * variable vas is function scoped
 * let is better for creating variables in block, just existing for that scope
 */

var animal = "cat"
console.log(animal)

{
  let animal = "dog"
  console.log(animal)
}

console.log(animal)

/**
 * const didn't let you change it's own values, except for const = new Object()
 * Object.freeze is here for you
 */

const secretNumber = 28

const will = {
  nome: "william",
  idade: 53
}
console.log(will)

will.idade = 20
will.cabelo = "Preto"
console.log(will)

Object.freeze(will)
will.idade = 100000
console.log(will)

/**
 * variable declaration after calling for them can bring up some problems...
 */

console.log(cat)
var cat = "meow" // return undefined
// const cat = "meow" // return error
