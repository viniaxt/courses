/**
 * spread operator is for spreading - spliting.
 */

let front = ['react', 'vue', 'angular']
let back = ['python', 'ruby', 'nodejs']

// creting an array
console.log(...'will') // print => w i l l 

// creating a string
console.log(...front)

let fullStack = [...front, 'RxJS', ...back] // print => [ ~content~ ]
console.log(fullStack)