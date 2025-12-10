// Build Server
const express = require('express')
const server = express()
const router = require('./routes/router')
server.use(express.static('public'))
const PORT = process.env.PORT || 3000

// Security
const helmet = require('helmet')
const cors = require('cors')

// Capitalize Movie Titles
const titleCase = require('./helpers/titleCase')
server.locals.titleCase = titleCase

// Helmet Config
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https:", "data:"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true}))

//View engine
server.set('view engine', 'ejs')

// localhost:3000
server.use('/', router)

// Server listening
server.listen(PORT, ()=> console.log(`Server is listening at Port ${PORT}. Ctrl+C to exit.`))