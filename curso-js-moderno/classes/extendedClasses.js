class Animal {
  constructor (name) {
    this.name = name
  }

  hello () {
    console.log(`I'm ${this.name}!`)
  }
}

class Dog extends Animal {
  constructor (name, sound) {
    // first, we need to use 'super' for calling the extend
    // class (animal) with his parameters
    super(name)
    this.sound = sound
  }

  bark () {
    console.log(`${this.sound}! I'm ${this.name}`)
  }
}

const elephant = new Animal('Dumbo')
const dog = new Dog('Jake', 'Auau')

dog.hello()
dog.bark()
console.log(dog.name)

// not defined for elephant.bark()
