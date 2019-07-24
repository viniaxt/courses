Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "Preco": 3.45}',
  '{ "nome": "Kit de lapis", "Preco": 41.22}',
  '{ "nome": "Caderno", "Preco": 13.90}',
  '{ "nome": "Caneta", "Preco": 7.50}'
]
//retornar um array apenas com os precos

console.log(carrinho)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)