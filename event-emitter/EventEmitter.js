const EventEmitter = require("events")

class Emitter extends EventEmitter {}

const myE = new Emitter()

myE.on("log", () => {
    console.log("This is my log file");
    
})

myE.on("hi", (data) => {
    console.log(data);
})

myE.emit("hi", "Hello World")
