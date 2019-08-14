/**
 * WeakMap
 */

let obj1 = {
  name: 'Willian',
  age: 26
}

let obj2 = {
  name: 'Jonas',
  age: 22
}

let wm = new WeakMap()

wm.set(obj1, 'Info do willian')
wm.set(obj2, 'Info do jonas')

console.log(wm)