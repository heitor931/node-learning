const {Buffer} = require("buffer")

const myMemory = Buffer.alloc(3)
const data = [0x4, 0x8,0x6, 0x9, 0x2,0x1]

const buff = Buffer.from("A minha vida é bela", "utf-8")

console.log(buff.toString("utf-8"));
