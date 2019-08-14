const data = [{
    name: "Vinicius",
    age: 19,
    city: "Blumenau"
  }, 
  {
    name: "William",
    age: 22,
    city: "Dubin"
  }
]

const sampleArray = [4, -5, 0, -1]

// return the first value that function finds
const underZero = sampleArray.find(x => x < 0)
const underZeroIndex = sampleArray.findIndex(x => x < 0)
console.log(underZero)
console.log(underZeroIndex)

const vini = data.find(person => person.name === "Vinicius")
console.log(vini)

