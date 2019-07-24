// a funcao callback que passamos para forEach tem os 3 indices definidos
// o primeiro é o nome
// o segundo é o indice
// o terceiro é o proprio array
// a partir do quarto, undefined

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, array, x) {   //o indice é o 2o parametro da funcao
  console.log(`${indice + 1} ${nome}`)
  console.log(array)
  console.log(x)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)