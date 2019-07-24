const moduloA = require('../../120 Modulo A')
console.log(moduloA.ola)


const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia')
  res.end()
}).listen(8080)


