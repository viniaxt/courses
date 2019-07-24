//callback é passar uma funcao que é chamada quando algum evento acontecer

const fabricantes = ["mercedes", "audi", "bmw"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricantes => console.log(fabricantes));
