// express is a library for create server
const express = require("express")

// is a library npm for taking the "path" of the files
const path = require("path")

// is a part of express that will create the routes for the files from view
const routes = express.Router()

// path to view
const views = __dirname + "/views/"

const Profile = {
    data : {
        name: "Lucas",
        avatar: "https://avatars.githubusercontent.com/u/69608721?v=4",
        "monthly-budget": 3000,
        "hours-per-day": 5,
        "days-per-week": 5,
        "vacation-per-year": 4,
        "value-hour": 75
    },

    controllers: {
        index(req, res) {
            return res.render(views + "profile", { profile: Profile.data })
        },

        update(req, res) {
            // req.body to take the data
            const data = req.body

            // define how many weeks are in a year: 52
            const weeksPerYear = 52

            // remove the weeks of vacation from year, to take how many weeks there are in 1 month
            const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12

            // how many hours i`m working in a week
            const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
            
            // total of hours worked from a month
            const monthlyTotalHours = weekTotalHours * weeksPerMonth

            // which will be the value from my hour
            const valueHour = data["monthly-budget"] / monthlyTotalHours

            Profile.data = {
                ...Profile.data,
                ...req.body,
                "value-hour": valueHour,
            }

            return res.redirect('/profile')
        }
    },

}

const Job = {
    data: [
        {
            id: 1,
            name: "Pizzaria Guloso",
            "daily-hours": 2,
            "total-hours": 1,
            createdAt: Date.now(),
        },
        {
            id: 2,
            name: "OneTwo Project",
            "daily-hours": 3,
            "total-hours": 47,
            createdAt: Date.now(),
        }
    ],

    controllers: {
        index(req, res) {
            const updatedJobs = Job.data.map((job) => {
                // adjusts on job
                const remaining = Job.services.remainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'
                
                return {
                    ...job,
                    remaining,
                    status,
                    budget: Job.services.calculateBudget(job, Profile.data["value-hour"])
                }
            })
            
            return res.render(views + "index", { jobs: updatedJobs })
        },

        create (req, res){
            return res.render(views + "job")
        },

        save(req, res) {
            const lastId = Job.data[Job.data.length - 1]?.id || 1

            Job.data.push({
                id: lastId + 1, // id for primary identifier
                name: req.body.name,
                "daily-hours": req.body["daily-hours"],
                "total-hours": req.body["total-hours"],
                createdAt: Date.now() // assigning today date
            })

            return res.redirect('/')
        },

        show(req, res) {

            const jobId = req.params.id

            const job = Job.data.find(job => Number(job.id) === Number(jobId))

            if (!job) {
                return res.send('Job not fund!')
            }

            job.budget = Job.services.calculateBudget(job, Profile.data["value-hour"])
            return res.render(views + "job-edit", { job })
        },

        update (req, res) {
            const jobId = req.params.id

            const job = Job.data.find(job => Number(job.id) === Number(jobId))

            if (!job) {
                return res.send('Job not fund!')
            }

            const updatedJob = {
                ...job,
                name: req.body.name,
                "total-hours": req.body["total-hours"],
                "daily-hours": req.body["daily-hours"],
            }

            Job.data = Job.data.map(job => { 
                if(Number(job.id) === Number(jobId)) {
                    job = updatedJob
                }

                return job
            })

            res.redirect('/job/edit_' + jobId)
        },

        delete(req, res) {
            const jobId = req.params.id

            Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId))

            return res.redirect('/')
        }
    },

    services: {
        remainingDays(job) {
            // calculation of time remaining
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
        
            const createdDate = new Date(job.createdAt)
            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDate = createdDate.setDate(dueDay)
        
            const timeDiffInMs = dueDate - Date.now()
            // transform milliseconds in days
            const dayInMs = 1000 * 60 * 60 * 24
            const dayDiff = Math.floor(timeDiffInMs / dayInMs)
        
            // remaining x days
            return dayDiff
        },
        calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
    }
}

// req, res
// home page
routes.get('/', Job.controllers.index)

// job create page
routes.get('/job', Job.controllers.create)
routes.post('/job', Job.controllers.save)

// job edit page
routes.get('/job/edit_:id', Job.controllers.show)
routes.post('/job/edit_:id', Job.controllers.update)
routes.post('/job/delete/edit_:id', Job.controllers.delete)

// profile page
routes.get('/profile', Profile.controllers.index )
routes.post('/profile', Profile.controllers.update )

module.exports = routes;