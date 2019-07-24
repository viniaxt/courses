const alunos = [
  { nome: 'joao', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 }
]

//imperativo: 'como' é mais importante
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativa: 'o que' é mais importante
// voce diz as funcoes o que fazer
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//comando sql
//select codigo, nome, email from clientes where ativo = 1

