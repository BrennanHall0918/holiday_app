const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const genreDao = {
    table: 'genre',

    mostUsed: (res, table)=> {
        const sql = `SELECT
            COUNT(pg.genre_id) AS most_used,
            g.genre
        FROM genre g
        INNER JOIN program_to_genre pg
        ON g.genre_id = pg.genre_id
        GROUP BY g.genre
        ORDER BY most_used DESC;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    findProgramsByGenre: (res, id, table)=> {
        const sql = `SELECT 
            p.title,
            p.rating,
            p.runtime,
            p.yr_released
        FROM program p
        JOIN program_to_genre pg
        ON p.program_id = pg.program_id
        WHERE pg.genre_id = ?;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = genreDao