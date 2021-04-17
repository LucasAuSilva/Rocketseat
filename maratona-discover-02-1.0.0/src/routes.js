// express é uma biblioteca para criar um servidor
const express = require("express")

// é um biblioteca npm para pegar caminhos dos arquivos 
const path = require("path")

// uma parte do express que vai criar as rotas para os files de view
const routes = express.Router()

// caminho para view
const views = __dirname + "/views/"

const profile = {
    name: "Lucas",
    avatar: "https://avatars.githubusercontent.com/u/69608721?v=4",
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4
}

// req, res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;