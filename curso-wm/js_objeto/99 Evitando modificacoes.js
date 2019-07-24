// Object.preventExtensios: nao consegue adicionar
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})
console.log('extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal: nao consegue excluir nem adicionar
const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze: nao possibilia nenhuma modificacao no objeto
const carro = { nome: 'Volvo' }
delete carro.nome
