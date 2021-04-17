const express = require("express")
const server = express()

server.set("view engine", "ejs")

server.get("/home", (req, res) => { 
    const items = [
        { 
            title: "D",
            message: "esenvolver em EJS"
        },
        {
            title: "E",
            message: "JS usa JS para renderizar HTML"
        },
        {
            title: "M",
            message: "uito facil eu acho"
        },
        {
            title: "A",
            message: "mo a lontrinha"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "A PORRA TA GRANDE"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de paginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    })
})

server.get("/sobre", (req, res) => res.render("pages/about"))

server.listen(3000, () => console.log("rodando"))