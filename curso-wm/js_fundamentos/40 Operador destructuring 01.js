// é uma forma de tirar de uma estrutura dois atributos
// como é objeto, o destructuring usa {}

const pessoa = {
    nome: "ana", 
    idade: 5, 
    endereco: {
        Logradouro: "Rua abc",
        numero: 123
    }
}
console.log(pessoa)

const { nome, idade } = pessoa     // extrai da estrututura pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa  
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa  // o atributo sobrenome nao existe
console.log(sobrenome, bemHumorada)

const { endereco: { Logradouro, numero } } = pessoa
console.log(Logradouro, numero)

