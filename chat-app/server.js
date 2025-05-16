const net = require("net")

const PORT = 3020
const HOST = "127.0.0.1"

const server = net.createServer( (socket) => {
        socket.on("data", (data) => {
            console.log(data.toString("utf-8"));
            
        })

        socket.on("error", () => {
            console.log("Client closed connection")
        })
        
} )

server.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}`);
    
})

