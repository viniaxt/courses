// map serve pra fazer uma transformacao no array, criando um novo com os dados modificados
// se o array original tiver 6 elementos, o novo tera 6 tambem

const nums = [1, 2, 3, 4, 5]

//map é um forEach com proposito
let resultado = nums.map(function (e) {
  return e * 2  //O retorno é necesasrio para transformar algo
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


//           adicionando 10 |  x por 3  | trocando . por ,
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

