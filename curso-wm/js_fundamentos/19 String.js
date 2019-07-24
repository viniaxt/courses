// string é uma cadeia de caracteres, iniciando com "  " ou ' ' ou ` `(crase)

const escola = "cod3r"   // 0, 1, 2, 3, ...

console.log(escola.charAt(4))  //charAt = character at
console.log(escola.charAt(6))
console.log(escola.charCodeAt(3))  // valor dentro da tabela Unicode
console.log(escola.indexOf('3'))  // valor da tabela unicode

console.log(escola.substring(1))  //apenas o indice inicial
console.log(escola.substring(0, 3)) // vai do 1o indice ate o ultimo, sem incluir o ultimo

console.log("Escola ".concat(escola).concat("!")) //concat concatena duas coisas
console.log(escola.replace(3, "e")) //troca o 3o termo por algo
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/g, 'e'))  //troca todos os char por tal coisa

console.log("Ana, Maria, Pedro".split(","))  //  pode ser /,/ ou ","
// Cria um array dentro de uma string

