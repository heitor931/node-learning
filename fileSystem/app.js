const fs = require("node:fs/promises")
const {Buffer} = require("buffer")
    
const watchMyFile = async () => { 
        
     try {
      const fileHandler = await fs.open("./command.txt", "r")
      const size = (await fileHandler.stat()).size
      const buff = Buffer.alloc(size)
      fileHandler.on("change", async() => {
        const content = await fileHandler.read(buff, 0)
         console.log(buff.toString());
        ld
      })



      fileHandler.emit("change")
    
  } catch (error) {
    console.log(error);
  }
}

watchMyFile()