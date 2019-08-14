/**
 * With proxy, we can verify informations that the user 
 * creates in a page.
 */

let obj = {
  name: "william",
  age: 26
}

// (target, handler)
let proxy = new Proxy(obj, {
  get(target, name) {
    console.log('Alguem esta pedindo o nome')
    return target[name]
  },

  set (target, name, value) {
    console.log('Alguem esta mudando o nome')
    target[name] = value
  }
})

// proxy.name
proxy.name = 'Jonas'
console.log(proxy.name)