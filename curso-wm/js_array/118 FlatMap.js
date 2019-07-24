const escola = [{
  nome: 'turma m1', alunos: [
    { nome: 'Gustavo', nota: 8.1 }, { nome: 'Ana', nota: 9.3 }
  ]
}, {
  nome: 'turma m2', alunos: [
    { nome: 'Rebeca', nota: 8.9 }, { nome: 'Roberto', nota: 7.3 }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

//flat map é um map associado com concat

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)