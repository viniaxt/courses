/* const e let sao armazenadas no browser, enquanto */
// dentro de node, cada arquivo e um modulo diferente

let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(this.a);
console.log(global.b);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

abc = 3; // NAO faca isso, armazenar variaveis sem let nem var
console.log(global.abc);
