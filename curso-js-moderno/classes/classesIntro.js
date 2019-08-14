// class in ES6

class Animal {
  constructor(kind, sound) {
    this.kind = kind
    this.sound = sound
  } 
  hello() {
    console.log(`${this.sound} I'm a ${this.kind}!`)
  }

  static info() {
    console.log('this is a class to create animals')
  }

  // to get information
  get name() {
    console.log(`${this.sound} my name is jake`)
  }

  // to set information/something
  set nickname (nick) {
    this.nick = nick
  }
}

const dog = new Animal('dog', 'auau')
console.log(dog)

const cat = new Animal('cat', 'miau')
console.log(cat)

dog.hello()

cat.name
dog.name

// set nickname
dog.nickname = 'J'
// callling for it
console.log(dog.nick)


// class in ES5

// function Animal (kind, sound) {
//   // we are building properties nased on a constructor method
//   this.kind = kind
//   this.sound = sound
// }

//  adding to Animal
// Animal.prototype.hello = function() {
//   console.log(`${this.sound} I'm a ${this.kind}!`)
// }
