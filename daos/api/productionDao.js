const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const productionDao = {
    table: 'production',

    findProgramsByProduction: (res, id, table)=> {
        const sql = `SELECT
            pr.production,
            p.title,
            p.rating,
            p.runtime,
            p.yr_released
        FROM program p
        INNER JOIN production pr
        ON p.production_id = pr.production_id
        WHERE pr.production_id = ?;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    productionActivity: (res, table)=> {
        const sql = `SELECT
            COUNT(p.program_id) AS total_programs,
            pr.production_id,
            pr.production AS production_company
        FROM production pr
        LEFT JOIN program p
        ON pr.production_id = p.production_id
        GROUP BY pr.production_id
        ORDER BY total_programs DESC;`

        con.query(sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = productionDao