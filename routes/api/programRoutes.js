const express = require ('express')
const router = express.Router()

const { programDao: dao } = require('../../daos/dao')

// http://localhost:3000/api/program
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http:localhost:3000/api/${table}/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:3000/api/${table}/${id}
router.get('/:id', (req,res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router