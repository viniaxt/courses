Number.prototype.entre = function(inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function(nota) {
  if (nota.entre(9.1, 10)) {
    console.log("quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperacao");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota invalida");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2);
imprimirResultado(130889);
