const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const directorDao = {
    table: 'director',

    directed: (res, id, table)=> {
        const sql = `SELECT
            p.title,
            d.first_name,
            d.last_name
        FROM director d
        INNER JOIN program_to_director pd
        ON d.director_id = pd.program_id
        INNER JOIN program p
        ON p.program_id = pd.program_id
        WHERE d.director_id = 1
        ORDER BY p.title;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    unusedDirectors: (res, table) => {
    const sql = `
        SELECT d.*
        FROM director d
        LEFT JOIN program_to_director pd ON d.director_id = pd.director_id
        WHERE pd.director_id IS NULL;
    `;

    con.query(sql, (error, rows) => {
        queryAction(res, error, rows, table);
    });
}
    
}

module.exports = directorDao