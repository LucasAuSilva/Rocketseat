const express = require("express")
const server = express()

server.set("view engine", "ejs")

server.get("/home", (req, res) => res.render("pages/index"))

server.get("/sobre", (req, res) => res.render("pages/about"))

server.listen(3000, () => console.log("rodando"))