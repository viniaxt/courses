function* getNames () {
  console.log('1° nome')
  yield 'William'

  console.log('2° nome')
  yield 'Jonas'

  console.log('3° nome')
  yield 'Gabriel'
}

const names = getNames()
console.log(names.next()) // stops in the first yield
console.log(names.next()) //              second yield
console.log(names.next()) //              third yield
