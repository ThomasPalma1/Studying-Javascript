const http = require ("http")
const host = "127.0.0.1"
const port = 3000

 const server = http.createServer((req, res)=>{ //comando para criar um servidor nas informações colocadas nas primeiras linhas
     res.statusCode = 200;
     res.setHeader('Content-Type','text/plain');
     res.end('Olá mundo\nMeu primeiro Script!');
 })

 server.listen(port, host, ()=>{

    console.log(`Server running at http://${host}:${port}`)
 })



 //script em node para subir um server web