const net = require("net")
const {createInterface, clearLine } = require("readline")

const client = net.createConnection({port: 3020, host: "127.0.0.1"}, () => {
       console.log(`Connection created with ${client.localAddress}`);
})
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) => {
    try {   
      client.write(line)
    } catch (error) {
      console.log(error);
      
    }
    
})
