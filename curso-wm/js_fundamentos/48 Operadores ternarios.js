// o operador ternario e simbolizado por '?'

const resultado = nota => (nota >= 7 ? "Aprovado" : "reprovado");

console.log(resultado(7.1));
console.log(resultado(6.7));

const resultado2 = nota => {
  return nota >= 7 ? "Aprovado" : "Reprovado";
};
console.log(resultado(6.9));
console.log(resultado(8.9));
