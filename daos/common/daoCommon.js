const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const daoCommon = {

     // Database Queries
    create: (res, table, fields)=> {
        const columns = Object.keys(fields)
        const values = Object.values(fields)

        const placeholders = columns.map(()=> '?').join(', ')
        const colList = columns.join(', ')

        const sql = `
            INSERT INTO ${table} (${colList})
            VALUES (${placeholders});`

            con.query(sql, values, (error, result)=> {
                queryAction(res, error, result, table)
            })
    },

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
    },

    countAll: (res, table)=> {

        con.query(
            `SELECT COUNT(*) AS total FROM ${table};`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    search: (res, table, column, term)=> {
        const sql = `SELECT * FROM ${table} WHERE ${column} LIKE ?;`

        con.query(sql, [`%${term}%`], (error, rows)=> {
            queryAction(res, error, rows, table)
        })
    }
}

module.exports = daoCommon
