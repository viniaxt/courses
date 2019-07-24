// processar o template string dentro de uma funcao
// basicamente inutil kkk

function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'outra string'
}

const aluno = 'Gui'
const situacao = 'aprovado'
console.log(tag`${aluno} esta ${situacao}`)
