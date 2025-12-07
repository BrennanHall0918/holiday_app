const express = require('express')
const router = express.Router()
const { productionDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/production
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http://localhost:3000/api/production
router.post('/', (req, res)=> {
    dao.create(res, dao.table, req.body)
})

// http://localhost:3000/api/production/search/${column}/${term}
router.get('/search/:column/:term', (req, res)=> {
    const { column, term } = req.params
    dao.search(res, dao.table, column, term)
})  

// http://localhost:3000/api/production/sort/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:300/api/production/count
router.get('/count', (req,res)=> {
    dao.countAll(res, dao.table)
})

// http://localhost:3000/api/production/${id}
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// http://lovalhost:300/api/production/${id}
router.put('/:id', (req,res)=> {
    dao.update(res, dao.table, req.body, { program_id: req.params.id})
})

module.exports = router