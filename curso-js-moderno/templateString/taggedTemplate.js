const city = "Dublin"
const something = "Guiness"
const otherThing = "Leprechauns"

function green (template, ...values) {
  return template.reduce((accumulator, actual, i) => {
    return `${accumulator}${values[i - 1].toUpperCase()}${actual}`
  })
}

const ireland = green`I live in ${city}, the city of ${something} and ${otherThing}`
console.log(ireland)

let firstName = "Vinicius"
let surName = "Axt"
let age = 19

const person = {
  firstName: firstName,
  secondName: surName,
  age: age
}