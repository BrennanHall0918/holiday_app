const express = require('express')
const router = express.Router()
const { program_to_directorDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/program_to_director
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// hhtp://localhost:3000/program_to_director
router.post('/', (req, res)=> {
    dao.create(res, dao.table, req.body)
})

// http://localhost:3000/api/program_to_director/${id}
router.get('/:id', (req,res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router