// variaveis definidas com a palavra let tem o escopo de bloco, alem do global e da funcao


let numero = 1
{
    let numero = 2
    console.log("dentro = ", numero)

}
console.log("fora =", numero) 