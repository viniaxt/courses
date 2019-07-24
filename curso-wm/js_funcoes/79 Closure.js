//closure é um escopo criado quando uma funcao e declarada
//esse escopo permite a funcao acessar e manipular variaveis externas a funcao

const x = "global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

// minhaFuncao() altera o valor da constante de x
// minhaFuncao() le o const x de dentro da funcao
