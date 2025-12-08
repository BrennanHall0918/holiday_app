const express = require('express')
const router = express.Router()
const { actorDao : dao } = require('../../daos/dao')

// http://localhost:3000/api/actor
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http://localhost:3000/api/actor/create
router.post('/create', (req, res)=> {
    dao.create(res, dao.table, req.body)
})

// http://localhost:3000/api/actor/search/${column}/${term}
router.get('/search/:column/:term', (req, res)=> {
    const { column, term } = req.params
    dao.search(res, dao.table, column, term)
})

// http://localhost:3000/api/actor/sort/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:300/api/actor/count
router.get('/count', (req,res)=> {
    dao.countAll(res, dao.table)
})

// http://localhost:3000/api/actor/appearsin/${id}
router.get('/appearsin/:id', (req,res)=> {
    dao.appearsIn(res, req.params.id, dao.table)
})

// http:localhost:3000/api/actor/mostprolific
router.get('/mostprolific', (req, res)=> {
    dao.mostProlific(res, dao.table)
})

// http://localhost:3000/api/actor/${id}
router.put('/:id', (req,res)=> {
    dao.update(res, dao.table, req.body, { program_id: req.params.id})
})

// http://localhost:3000/api/actor/${id}
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router