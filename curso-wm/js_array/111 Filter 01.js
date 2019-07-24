//filter é uma forma de filtrar os elementos de um array
//é um forEach com proposito bem specifico

const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'iPad pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
  return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))
// para filtrar os caros e os frageis de uma vez so