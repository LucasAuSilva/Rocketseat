// express is a library for create server
const express = require("express")

// npm library for taking the "path" of the files
const path = require("path")

// server is a express constant
const server = express()

// call the files from routes to send for the server
const routes = require("./routes")

// able/using template engine
server.set('view engine', 'ejs')

// able/using the req.body
server.use(express.urlencoded( { extended: true } ))

// able/using the files static
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(3000, () => console.log('Running server on port 3000'))