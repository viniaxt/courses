// array organiza os dados a partir de um indice(o, 1, 2, ...)
// array é adaptavel, heterogeneo(boolean, objeto, inteiro, dentro do mesmo array)

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'   //melhor para substituir
aprovados.push('Jorge')  //melhor para adicionar elementos (adiciona um indice)
console.log(aprovados.length)


aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()  //Causa uma alteracao no array, ordenando os itens
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados.splice(1, 1)  //exclui x elementos a partir de tal indice(i, x)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

