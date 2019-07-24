const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// dados em urlencoded para o postman acessar com o padrao urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) //convertido para JSON com o send
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)  // esta convertendo para json
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    id: req.params.id
  })
  res.send(produto)  // esta convertendo para json
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)  // esta convertendo para json
})

//qual porta minha aplicacao esta escutando
app.listen(porta, () => {
  console.log(`O servidor esta executando na porta ${porta}`)
})



