// para funcoes, usando objetos

function rand({ min = 0, max = 1000}) {  
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 40, max: 50}
console.log(rand(obj)) // oscila entre 40 e 50
console.log(rand({ min: 955}))  // oscila entre 955 e 1000
console.log(rand({}))     // oscila entre 0 e 1000
