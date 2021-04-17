const express = require("express")
const path = require("path")
const server = express()

// habilitar arquivos statics
server.use(express.static("public"))

// request, response
server.get('/', (request, response) => {
    return response.sendFile(path.resolve(__dirname, "views", "index.html"))
})

server.listen(3000, () => console.log('rodando'))