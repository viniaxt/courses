const pai = { nome: 'pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerabel: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ?  //se retornar true, ele é deste objeto
    console.log(key) : console.log(`Por Heranca`)
}
