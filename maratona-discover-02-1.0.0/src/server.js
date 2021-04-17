// express é uma biblioteca para criar um servidor
const express = require("express")

// é um biblioteca npm para pegar caminhos dos arquivos
const path = require("path")

// server é uma constante para express
const server = express()

// chamando o arquivo routes para enviar para server
const routes = require("./routes")

// usando template engine
server.set('view engine', 'ejs')

// habilitar arquivos statics
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))