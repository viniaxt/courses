/**
 * Arrow function generates a faster and clean code - for reading and coding
 */

const ireland = ["Dublin", "Galway", "Cork"]

const love = ireland.map(function(name) {
  return `I love ${name}`
})

console.log(love)

const loveArrow = ireland.map(name => {
  return `I love ${name}`
})

console.table(loveArrow)

const loveArrowOneLine = ireland.map(name => `I love ${name}`)
const loveChain = ireland
  .filter(name => name === "Dublin")
  .map(name => `I love ${name}`)

console.log(loveChain)

/**
 * this is the object that we are interacting with in a specific cotext
 * Remember: this code is here just for remembering. To see it working, <script> ** code ** </script>
 */

const sandwich = {
  bread: "white",
  cheese: "cheddar",
  prepare: function() {
    return `I want a sandwich with ${this.bread} bread and ${
      this.cheese
    } cheese!`
  },
  make: function() {
    const that = this.bread // in case, sandwich
    console.log(that)

    window.setTimeout(() => {
      console.log(this.prepare()) // now, window
    }, 500)
  }
}
