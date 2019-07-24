const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()  //retira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')  // no [2] adiciona
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)   // cria um novo array a partir de [i]
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)   // o indice inicial entra no array, e o final nao
console.log(algunsPilotos2)

