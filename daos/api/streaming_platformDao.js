const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const streaming_platformDao = {
    table: 'streaming_platform',

    findProgramsOnPlatform: (res, id, table)=> {
        const sql = `SELECT
            p.title,
            p.rating,
            p.runtime,
            p.yr_released
        FROM program p
        INNER JOIN program_to_streaming ps
        ON p.program_id = ps.program_id
        WHERE ps.streaming_platform_id = ?;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    platformUsageStats: (res, table)=> {
        const sql = `SELECT
            COUNT(ps.program_id) AS total_programs,
            s.streaming_platform_id,
            s.streaming_platform
        FROM streaming_platform s
        LEFT JOIN program_to_streaming ps
        ON s.streaming_platform_id = ps.streaming_platform_id
        GROUP BY s.streaming_platform_id
        ORDER BY total_programs DESC;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }

}

module.exports = streaming_platformDao