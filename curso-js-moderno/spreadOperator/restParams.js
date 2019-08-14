function multiply (mult, ...args) {
  return args.map(arg => mult * arg)
}

// rest params can receive multiple params, and they are not definde by you!
console.log(multiply(2, 1, 2, 3, 4, 5, 6))