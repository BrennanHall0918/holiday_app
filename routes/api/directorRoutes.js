const express = require('express')
const router = express.Router()
const { directorDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/director
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http://localhost:3000/api/director/sort/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/director/${id}
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router