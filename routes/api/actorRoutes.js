const express = require('express')
const router = express.Router()
const { actorDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/actor
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http://localhost:3000/api/actor/sort/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/actor/${id}
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router