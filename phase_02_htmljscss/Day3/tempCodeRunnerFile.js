const http = require("http")

const server = http.createServer((req,res) => {
    res.end("Server Created")
})

server.listen(8080,() => {
    console.log("Server is started in 8080 port");
})
