let dobro = function(a) {
  return 2 * a;
};

dobro = a => {
  // Arrow sempre é uma funcao anonima
  return 2 * a;
};

dobro = a => 2 * a; // o return esta implicito
console.log(dobro(Math.PI));

let ola = function() {
  return "ola";
};

ola = () => "olá";
console.log(ola());
