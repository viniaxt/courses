//essa funcao (auto invocada) é somente escopo local, nao global
// iife - immediatly invoked function expression

(function() {
  console.log("sera executado na hora");
  console.log("foge do escopo mais abrangente");
  const x = 1;
  console.log(`agora ${x}.`);
})();
