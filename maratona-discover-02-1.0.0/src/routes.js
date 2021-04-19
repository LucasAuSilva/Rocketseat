// express is a library for create server
const express = require("express")

// is a library npm for taking the "path" of the files
const path = require("path")

// is a part of express that will create the routes for the files from view
const routes = express.Router()

// path to view
const views = __dirname + "/views/"

const profile = {
    name: "Lucas",
    avatar: "https://avatars.githubusercontent.com/u/69608721?v=4",
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4
}
const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        createdAt: Date.now(),
    },
    {
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        createdAt: Date.now(),
    }
]

// req, res
routes.get('/', (req, res) => {

    const updatedJobs = jobs.map((job) => {
        // adjusts on index
        // calculation of time remaining
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        // const dueDate = createdDate.setDate

        return job
    })
    

    return res.render(views + "index", { jobs })
})


routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    // { name: 'bla', 'daily-hours': '3.1', 'total-hours': '3'}
    const lastId = jobs[jobs.length - 1]?.id || 1

    jobs.push({
        id: lastId + 1, // id for primary identifier
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        createdAt: Date.now() // assigning today date
    })
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;