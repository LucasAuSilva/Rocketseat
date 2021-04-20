import express from "express";
import "./database"
import { routes } from "./routes"

const server = express();

server.use(express.json())

/*
* GET = Search
* POST = Creating
* PUT = Update
* DELETE = For delete
* PATH = update specific information
*/

server.use(routes);

server.listen(3000, () => console.log("Server running on port 3000"))