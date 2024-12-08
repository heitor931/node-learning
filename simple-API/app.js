const express = require("express")

const app = express()


let reqNum = 0
const calculateNumberOfRequests = (req, res, next) => { 
    reqNum++
    console.log(reqNum);
    req.reqNumber = reqNum
    next()
 }

app.use(calculateNumberOfRequests)


app.get("/", (req, res) => {

    res.send({ message: "It's working", ip: `The number of requests is ${reqNum}` })
    

})



module.exports = app