//com herenca vc pode reutilizar codigos
//existe apenas 1 pai em js

const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'v40',
  velMax: 200
}

console.log(ferrari.__proto__)  //__proto__ faz o reconhecimento de heranca
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__protp__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() { }
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
