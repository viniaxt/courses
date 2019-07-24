
const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'ana', nota: 8.7, bolsista: true }
]

//desafio 1: todos os alunos sao bolsistas?

//                     acumulador (para o resultado final ser verdadeiro, todos v)
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//desafio 2: algum aluno é bolsista?

const apenasBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista))