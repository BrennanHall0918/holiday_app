// Build Server
const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> console.log(`Server is listening at Port ${PORT}. Ctrl+C to Exit.`))