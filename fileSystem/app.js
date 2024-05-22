const {watch} = require("node:fs/promises")
    
    
    
const watchMyFile = async () => { 
        
     try {
        const watcher = watch("./command.txt")
        for await (const event of watcher)
        console.log(event);
    
  } catch (error) {
    console.log(error);
  }
     }

watchMyFile()