const contadorA = require('./126InstanciaUnica')
const contadorB = require('./126InstanciaUnica')

const contadorC = require('./126InstanciaNova')
const contadorD = require('./126InstanciaNova')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)