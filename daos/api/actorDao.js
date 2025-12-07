const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const actorDao = {

    table: 'actor',

    appearsIn: (res, id, table)=> {
        const sql = `SELECT
            p.program_id,
            p.title
        FROM program p
        INNER JOIN program_to_actor pa
        ON p.program_id = pa.program_id
        WHERE pa.actor_id = ?
        ORDER BY p.title;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    mostProlific: (res, table)=> {
        const sql = `SELECT
            COUNT(pa.actor_id) AS movie_count, 
            a.first_name,
            a.last_name
        FROM actor a
        INNER JOIN program_to_actor pa
        ON a.actor_id = pa.actor_id
        GROUP BY a.first_name, a.last_name
        ORDER BY movie_count DESC, a.last_name;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }

}

module.exports = actorDao