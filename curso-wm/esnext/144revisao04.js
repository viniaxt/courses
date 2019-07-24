// Object.values, Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//class

class animal { }
class cachorro extends animal {
  falar() {
    return 'au au'
  }
}

console.log(new cachorro().falar())