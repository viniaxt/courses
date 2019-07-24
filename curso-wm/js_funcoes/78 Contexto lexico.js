const valor = "global";

function minhaFuncao() {
  //Uma funcao declarada em JS tem consciencia do contexto no qual foi declarada
  console.log(valor);
}

function exec() {
  const valor = "local";
  minhaFuncao();
}

exec();
// a funcao exec vai chamar global primeiro, porque a minhaFuncao ira procurar dentro do escopo lexico onde ela foi definida
