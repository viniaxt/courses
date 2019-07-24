console.log(soma(3, 4));

//funtion declaration: le codigos em cima
function soma(x, y) {
  return x + y;
}

//function expression: le somente codigos abaixo
const sub = function(x, y) {
  return x - y;
};

//named function expression: le somente codigos abaixo
const mult = function mult(x, y) {
  return x * y;
};

console.log(sub(3, 4));
console.log(mult(3, 4));
