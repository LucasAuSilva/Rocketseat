import express, { response } from "express";
const server = express();

/*
* GET = Search
* POST = Creating
* PUT = Update
* DELETE = For delete
* PATH = update specific information
*/

server.get("/", (req, res) => {
    return res.json({
        message: "Hello nlw 05"
    })
})

server.post("/users", (req, res) => {
    return response.json({ message: "User save with success! "})
})


server.listen(3000, () => console.log("Server running on port 3000"))