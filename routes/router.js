const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// Root Route => http://localhost:3000/api
router.get('/api', (req, res)=> {
    res.json({
        'All Programs': `http://localhost:${PORT}/api/program`,
        'Actors': `http://localhost:${PORT}/api/actor`,
        'Directors': `http://localhost:${PORT}/api/director`,
        'Production Companies': `http://localhost:${PORT}/api/production`,
        'Streaming Platforms': `http://localhost:${PORT}/api/streaming_platform`
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
    .send('<h1>404 Error: This page does not exist.</h1>')
})

module.exports = router