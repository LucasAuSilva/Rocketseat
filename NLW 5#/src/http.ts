import express from "express";
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import "./database"
import { routes } from "./routes"
import path from "path"

const server = express();

server.use(express.static(path.join(__dirname, "..", "public")))
server.set("views", path.join(__dirname, "..", "public"))
server.engine("html", require("ejs").renderFile)
server.set("view engine", "html")

server.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})

const http = createServer(server) // Creating protocol http
const io = new Server(http) // Creating protocol ws

io.on("connection", (socket: Socket) => {
    console.log("Connect", socket.id)
})

/*
* GET = Search
* POST = Creating
* PUT = Update
* DELETE = For delete
* PATH = update specific information
*/

server.use(express.json())
server.use(routes);

export { http, io}