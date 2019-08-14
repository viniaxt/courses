const currency = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ currency: "euro", value: 3.5 })
  }, 2000)
})

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Ireland", "England", "Scotland"])
  }, 600)
})

Promise
  .all([currency, countries])
  .then(responses => console.log(responses))

Promise
  // race: in the moment that the first promise is resolved it ends
  // in this case, it will only print countries (600ms)
  .race([currency, countries])
  .then(responses => console.log(responses))
