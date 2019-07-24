//Exemplo de funcao forEach criada
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {   //o indice é o 2o parametro da funcao
  console.log(`${indice + 1} ${nome}`)
})