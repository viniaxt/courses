const fs = require('fs')

const produto = {
  nome: 'celular',
  preco: 1239.99,
  descontos: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})