const saudacao = "opa" 

function exec() {
    const saudacao = "falaaa"
    return saudacao
}

//Objetos sao grupos anunhados de pares nome/valor

const cliente = {
    nome: "pedro",
    peso: 90,
    idade: 32,
    endereco: {
        logradouro: "rua xxxx",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
