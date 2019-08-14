// main method
// you can only have 1 default per archive
// you can import with any name
// import doesnt need { }
function sum (a, b) {
  return a + b
}
export default sum

// named export
// multiple exports inside an archive
// import need { }
export function sub (a, b) {
  return a - b
}

// multiple export
function mult (a, b) {
  return a * b
}

function div (a, b) {
  return a / b
}
export { mult, div }


