/**
 * Set is similar to array, but its structure is a little bit different
 * You can access properties of set based on the value of that position
 * With set, you can't have two different memory-spaces with same value.
 */

let mySet = new Set(['willian', 'jonas', 'vinicius'])

mySet.add('marcelo')
mySet.delete('willian')

console.log(mySet.has('willian'))
console.log(mySet)

let it = mySet.values()

for (name of it) {
  console.log(name)
}