const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000
const programDao = require('../daos/api/programDao')

// Home Page => http://localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: "Holiday App Home",
        name: "Brennan's Holiday App!"
    })
})

// All Programs Page => http://localhost:3000/programs
router.get('/programs', (req, res)=> {
    programDao.renderProgramCard(res, programDao.table, 'programs', 'All Programs')
})

// Actor Form => http:/localhost:3000/actor_form
router.get('/actor_form', (req,res)=> {
    res.render('pages/actor_form', {
        title: "actor form",
        name: "actor_form"
    })
})

// Root Route => http://localhost:3000/api
router.get('/api', (req, res)=> {
    res.json({
        'All Programs': `http://localhost:${PORT}/api/program`,
        'Actors': `http://localhost:${PORT}/api/actor`,
        'Directors': `http://localhost:${PORT}/api/director`,
        'Production Companies': `http://localhost:${PORT}/api/production`,
        'Streaming Platforms': `http://localhost:${PORT}/api/streaming_platform`,
        'Genres': `http://localhost:${PORT}/api/genre`
    })
})

const endpoints = [
    'program',
    'actor',
    'director',
    'genre',
    'production',
    'streaming_platform',
    'program_to_actor',
    'program_to_director',
    'program_to_genre',
    'program_to_streaming'
]

endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
})

//Error Page
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/error', {
        title: "Error Page",
        name: "Error"
    })
})

module.exports = router