let valor
console.log(valor)

valor = null    //ausencia de valor na variavel
console.log(valor)
//console.log(valor.toString)  //Erro!!!!

const produto = {}
console.log(produto.preco)  // Preco nao esta definido,
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite utilizar undefined no codigo, deixe para o sistema
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null //Sem preço
console.log(produto)
console.log(!!produto.preco)
