const {Buffer} = require("buffer")


const myMem = Buffer.alloc(2e9)

setInterval(() => {
    myMem.fill(0x78)
},5000)
