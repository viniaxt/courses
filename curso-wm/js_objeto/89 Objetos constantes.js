// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
// ERRO: nao podemos definir outro objeto em mesma constante
// pessoa = { nome: 'ana' }


//objeto constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
