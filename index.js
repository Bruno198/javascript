//console.log("Primeiro Programa");

const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/plain");
    res.end("Nossa pagina linda");
});

server.listen(port , hostname , () => {
    console.log("server runing at http://${hostname}:${port}/");
});