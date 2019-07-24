for (var i = 0; i < 10; i++) {  //pelo fato de var nao ter escopo de bloco, o "i" aparece globalmente
    console.log(i)
}
console.log("i =", i)
