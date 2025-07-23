import { pipeline } from "stream"
import fs from "fs"

pipeline(
  fs.createReadStream("MongoDB.mp4"),
  fs.createWriteStream("/engineering/MongoDB.mp4"),
  (err) => {
    if (err) {
      console.log(err);
  
    } else {
      console.log("Pipeline succeded");
  
    }
  }
)


