let m = new Map()

m.set('willian', 26)
m.set('Jonas', 22)

console.log(m)
console.log(m.size)
console.log(m.has('Jonas'))

const it = m.values()
console.log(it)

console.log(it.next())
console.log(it.next())