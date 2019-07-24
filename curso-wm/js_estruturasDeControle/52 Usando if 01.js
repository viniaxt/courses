function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  }
  if (nota <= 7) {
    console.log("Reprovado");
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6.5);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("é verdade..." + valor);
  }
}

//Os falsos:

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);

//Os verdadeiros

seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo({});
