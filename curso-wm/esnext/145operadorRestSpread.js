//rest - juntar e spread - espalhar
//usar rest como parametro de funcao
//usar spread com objeto

//spread com objeto
const funcionario = { nome: 'maria', salario: 12345.67 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//spread com array
const grupoA = ['Joao', 'Pedro', 'rafaela']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)