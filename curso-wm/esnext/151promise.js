// promise pode ser cumprida ou rejeitada

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {  //resolve sera chamada quando promise for atendida
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falarDepoisDe(3, 'Que legal')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e)) //fazer tratamento do erro(so aparece quando da erro)
