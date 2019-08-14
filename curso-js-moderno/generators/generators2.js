function* getNames () {
  yield nextName("William")
  yield nextName('Jonas')
  yield nextName('Gabriel')
}

const newWayToGetNames = getNames()
newWayToGetNames.next()

let i = 1
function nextName (name) { 
  new Promise(
    (resolve, reject) => {
    resolve(name)
    }
  )
    .then((data) => console.log(`${i}° name => ${data}`))
    .then((_) => i++)
    .then((_) => newWayToGetNames.next())
}