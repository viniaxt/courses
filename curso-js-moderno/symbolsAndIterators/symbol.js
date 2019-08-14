 
/**
 * Symbol creates an unique identifier
 * With symbol, you can create objects wihout risk of having the same name 
 * 
 *  */


let foo = Symbol('name')
console.log(foo)

let obj = {
  [Symbol('name')]: 'William',
  [Symbol('age')]: 26,
  city: 'Dublin'
}

console.log(Object.keys(obj)) // showed city
console.log(Object.getOwnPropertySymbols(obj)) // showed name and age

const symbols = Object.getOwnPropertySymbols(obj)

console.log(obj[Symbol('name')])

const data = symbols.map(sym => obj[sym])
console.log(data)