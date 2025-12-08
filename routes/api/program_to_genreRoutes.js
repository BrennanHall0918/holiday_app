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

// http://localhost:3000/api/program_to_genre/id/${id}
router.get('/id/:id', (req,res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router