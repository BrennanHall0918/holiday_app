const express = require ('express')
const router = express.Router()
const { programDao: dao, programDao } = require('../../daos/dao')

// http://localhost:3000/programs
router.get('/', (req, res)=> {
    dao.renderProgramCard(res)
})

// http://localhost:3000/program/id/:id
router.get('/id/:id', (req, res)=> {
    dao.renderSingleMovie(res,req.params.id)
})

// http://localhost:3000/api/program/add
router.post('/add', (req, res)=> {
    programDao.createFullProgram(req, res)
})

// http://localhost:3000/api/program
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
})

// http://localhost:3000/api/program/findprograminfo
router.get('/findprograminfo', (req, res)=> {
    dao.findProgramInfo(res, dao.table)
})

// http://localhost:3000/api/program
router.post('/', (req, res)=> {
    dao.create(res, dao.table, req.body)
})

// http://localhost:3000/api/actor/program/${column}/${term}
router.get('/search/:column/:term', (req, res)=> {
    const { column, term } = req.params
    dao.search(res, dao.table, column, term)
})  

// http:localhost:3000/api/program/${sorter}
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// http://localhost:300/api/program/count
router.get('/count', (req,res)=> {
    dao.countAll(res, dao.table)
})

// http://localhost:3000/api/program/id/${id}
router.get('/:id', (req,res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// http://lovalhost:300/api/program/id/${id}
router.put('/id/:id', (req,res)=> {
    dao.update(res, dao.table, req.body, { program_id: req.params.id})
})

// http://localhost:3000/api/program/filterbygenre/${genre_id}
router.get('/filterbygenre/:id', (req, res)=> {
    dao.filterByGenre(res, dao.table, req.params.id)
})

module.exports = router