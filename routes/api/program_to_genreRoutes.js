const express = require('express')
const router = express.Router()
const { program_to_genreDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/program_to_genre
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})


// hhtp://localhost:3000/program_to_genre
router.post('/', (req, res)=> {
    dao.create(res, dao.table, req.body)
})

module.exports = router