const {Buffer} = require("buffer")

const myMemory = Buffer.alloc(5000000000)
console.log(myMemory)

for (let i = 0; i < myMemory.length; i++) {
  myMemory[i] = Math.floor(Math.random() * 256)
}