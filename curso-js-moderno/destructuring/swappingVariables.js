let a = 42
let b = 21

console.log(a)
console.log(b)

{
  [a, b] = [b, a]
}

console.log(a)
console.log(b)