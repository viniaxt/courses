const fs = require('fs')

// __dirname é uma constante que representa o diretorio atual
const caminho = __dirname + '/131Arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./131Arquivo.json')  // le o arquivo e traz o json convertido em objeto
console.log(config.db)

// read dir (ler diretorio)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta...')
  console.log(arquivos)
})