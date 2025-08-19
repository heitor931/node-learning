import http from 'http'
import fs from 'fs/promises'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { createWriteStream } from 'fs'

const server = http.createServer()
const pump = promisify(pipeline)

server.on('request', async(request, response) => {
    console.log(request.url, request.method);

   if (request.url === '/' && request.method === 'GET'){
       response.setHeader('Content-Type', 'text/html')
       response.statusCode = 200
        const fileHandle = await fs.open('./public/index.html')
        const readStream = fileHandle.createReadStream()
        await pump(readStream, response )
    
   }
   if (request.url === '/styles.css' && request.method === 'GET'){
       response.setHeader('Content-Type', 'text/css')
       response.statusCode = 200
        const fileHandle = await fs.open('./public/styles.css')
        const readStream = fileHandle.createReadStream()
        await pump(readStream, response )
    
   }
   if (request.url === '/index.js' && request.method === 'GET'){
       response.setHeader('Content-Type', 'text/index.js')
       response.statusCode = 200
        const fileHandle = await fs.open('./public/index.js')
        const readStream = fileHandle.createReadStream()
        await pump(readStream, response )
    
   }
   if (request.url === '/test' && request.method === 'GET'){
       response.setHeader('Content-Type', 'application/json')
       response.statusCode = 200
        const fileHandle = await fs.open('dummyData.txt')
        const readStream = fileHandle.createReadStream()
        await pump(readStream, response )
    
   }

   if (request.url === '/users' && request.method === 'POST') {
    response.setHeader('Content-Type', 'application/json')
    response.statusCode = 201
        request.on('data', async(data) => {

            // body parser to tranform url encoded data to json
            const stringData = data.toString()
            const arrayData = stringData.split('&');
            const splitAmperSand = arrayData.map((item) => item.split('='))
           const listOfObjects = splitAmperSand.map(el => {
               return {[el[0]]: decodeURI(el[1])}
           });
            await fs.writeFile('user.json',JSON.stringify(listOfObjects))
            response.end(JSON.stringify({message: 'users successfully created'}))
            
        })
        
   }

   if (request.url === '/upload', request.method === 'PUT') {
    
    
     response.setHeader('Content-Type', 'application/json')
    response.statusCode = 201

   const myWriteStream = createWriteStream('./storage/movie.mp4')
   await pump(request, myWriteStream)

    response.end(JSON.stringify({message: 'Your file was uploaded successfully'}))

   }
    
})





server.listen(8050, () => {
    console.log(`server is listening in port 8050`);
    
})