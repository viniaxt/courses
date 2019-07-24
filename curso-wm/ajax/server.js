const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const app = express()

//middlewares: funcao que vai ser executada quando uma requisicao chegar

app.use(express.static('.')) // provem os arquivos estaticos(html, css, ...)
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './upload')
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`)
  },
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro')
    }

    res.end('Concluido com sucesso')
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body, // tudo que veio na resposta, sera adicionado
    id: 1
  })
})

app.get('/parOuImpar', (req, res) => {
  // req.body
  // req.query
  // req.params
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

app.listen(8000, () => console.log('Executando na porta 8000...'))
