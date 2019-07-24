// call/apply servem para chamar a funcao

function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "notebook",
  preco: 4589,
  desc: 0.15,
  getPreco
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));
//a diferenca entre call e apply é a forma como voce passa os parametros para a chamada da funcao
console.log(getPreco.call(carro, 0.17, "$")); //fora de array
console.log(getPreco.apply(carro, [0.17, "$"])); //dentro de array
console.log(getPreco.apply(global, [0.17, "$"]));
