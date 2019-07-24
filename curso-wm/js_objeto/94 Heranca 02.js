//Cadeia de prototipos (prototype chains)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1, filho.attr2, filho.attr3)

console.log(pai.attr1, pai.attr3)

//----------EXEMPLO 2-------------
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  velMax: 324    //shadowing - sombreamento
}

const volvo = {
  modelo: 'v40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)  //setPrototypeOf diz que ferrari é um carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

volvo.acelerarMais(300)   // a velocidade maxima é 200
console.log(volvo.status())

