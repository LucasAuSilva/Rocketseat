const express = require("express")
const server = express()

server.set("view engine", "ejs")

server.get("pages/home", (req, res) => res.render("index"))

server.get("pages/sobre", (req, res) => res.render("about"))

server.listen(3000, () => console.log("rodando"))