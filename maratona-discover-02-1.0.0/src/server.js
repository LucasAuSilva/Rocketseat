const express = require("express")
const path = require("path")
const server = express()

// request, response
server.get('/', (request, response) => {
    console.log(path.resolve(__dirname, "views", "index.html"))
    // return response.sendFile("C:\Users\lucassilva\Downloads\Visual Studio\maratona-discover-02-1.0.0")
})

server.listen(3000, () => console.log('rodando'))