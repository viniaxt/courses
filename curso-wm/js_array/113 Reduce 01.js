const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 10)

console.log(resultado)

// return seleciona o indice 0 e indice 1, e o resultado do acumulador
// é a soma com o acumulador anterior, formando um acumulador novo
// 7.3 9.2 = 16.5
// ||
// 16.5 9.8 = 26.3
// ||
// 26.3 8.7