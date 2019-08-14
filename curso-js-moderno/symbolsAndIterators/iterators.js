// iterators are protocols that permit us to iterate information
// iterables are 

var text = 'Ireland' // iterable
var it = text[Symbol.iterator]() // iterator (can pass through all items)

console.log( it.next() )
console.log( it.next() )
console.log( it.next() )
console.log( it.next() )
console.log( it.next() )
console.log( it.next() )
console.log( it.next() )

for (letter of text) {
  console.log(letter)
  if (letter === 'a') break
}
