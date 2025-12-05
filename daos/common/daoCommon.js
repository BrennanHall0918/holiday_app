const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const daoCommon = {

    // Database Queries
    findAll: (req, res, table) => {

        con.query(
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },
    
    findById: (res, table, id)=> {

        con.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }    
        )
    },
    
    sort: (res, table, sorter)=> {

        con.query(
            `SELECT * FROM ${table} ORDER BY ${sorter}`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = daoCommon
