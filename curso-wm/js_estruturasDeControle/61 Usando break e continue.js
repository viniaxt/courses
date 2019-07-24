// break desvia o fluxo para depois do switch
// continue vai agir no laco mais proximo dele, interrompend a execucao atual e vai pra proxima

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break; // interrompeu e nao executou os proximos indices
  }
  console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
  if (y == 5) {
    continue; // quando chegar no indice 5, ele interrompe
  }
  console.log(`${x} = ${nums[y]}`);
}

//Se possivel, nao utilizar

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) console.log(`par = ${a}, ${b}`);
  }
}

console.log("fim");
