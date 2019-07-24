function fun1() {} // criar de forma literal

const fun2 = function() {}; // arnazenar em uma variavel ou constante
const array = [
  function(a, b) {
    return a + b;
  },
  fun1,
  fun2
];
console.log(array[0](2, 3));

const obj = {}; //armazenar em um objeto
obj.falar = function() {
  return "opa";
};
console.log(obj.falar());

function run(fun) {
  fun();
}

run(function() {
  console.log("executando...");
});

//Uma funcao pode conter outra funcao
function soma(a, b) {
  return function(c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
