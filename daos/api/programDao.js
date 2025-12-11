const { render } = require('ejs')
const con = require ('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')
const findOrCreate = require('../../helpers/findOrCreate_Functions')

const programDao = {

    table: 'program',

    renderProgramCard: (res, title)=> {
        const sql= `SELECT
            p.program_id,
            p.poster_url,
            p.title,
            p.yr_released,
            p.runtime,
            p.rating
        FROM program p
        WHERE p.inactive = 0;`

        con.query(sql,
            (error, rows)=> {
                if (error) {
                    console.error(`DAO Error: ${error}`)
                    return res.status(500)
                    .render('pages/error', {
                        message: 'Database error',
                        error: error
                    })
                }

                res.render('pages/programs', {
                    title: title,
                    name: 'All Programs',
                    programs: rows
                })
            }
        )
    },

    renderSingleMovie: (res, id)=> {
        const sql = `SELECT
            p.program_id,
            p.poster_url,
            p.title,
            p.rating,
            p.runtime,
            p.nationality,
            p.yr_released,
            p.critic_score,
            p.description,
            pr.production AS production_company,
            GROUP_CONCAT(DISTINCT CONCAT(a.first_name, ' ', a.last_name) 
                ORDER BY a.last_name, a.first_name SEPARATOR ', ') AS actors,
            GROUP_CONCAT(DISTINCT CONCAT(d.first_name, ' ', d.last_name) 
                ORDER BY d.last_name, d.first_name SEPARATOR ', ') AS directors,
            GROUP_CONCAT(DISTINCT g.genre 
                ORDER BY g.genre SEPARATOR ', ') AS genres,
            GROUP_CONCAT(DISTINCT sp.streaming_platform
                ORDER BY sp.streaming_platform SEPARATOR ', ') AS streaming_platforms

        FROM program p
        LEFT JOIN production pr
            ON p.production_id = pr.production_id
        LEFT JOIN program_to_actor pa
            ON p.program_id = pa.program_id
        LEFT JOIN actor a
            ON pa.actor_id = a.actor_id
        LEFT JOIN program_to_director pd
            ON p.program_id = pd.program_id
        LEFT JOIN director d
            ON pd.director_id = d.director_id
        LEFT JOIN program_to_genre pg
            ON p.program_id = pg.program_id
        LEFT JOIN genre g
            ON pg.genre_id = g.genre_id
        LEFT JOIN program_to_streaming ps
            ON p.program_id = ps.program_id
        LEFT JOIN streaming_platform sp
            ON ps.streaming_platform_id = sp.streaming_platform_id
        WHERE p.program_id = ? AND inactive = 0
        GROUP BY p.program_id;`

        con.query(
            sql,
            [id],
            (error,rows)=> {
                if (error) {
                    console.error(`DAO Error: ${error}`)
                    return res.status(500)
                    .render('pages/error', {
                        message: 'Database error',
                        error: error
                    })
                }

                if (rows.length === 0) {
                    return res.status(404)
                    .render('pages/error', {
                        message: 'Movie not found'
                    })
                }

                res.render('pages/program', {
                    title: rows[0].title,
                    name: rows[0].title,
                    program: rows[0]
                })
            }
        )

        
    },

    createFullProgram: (req, res)=> {

    const data = req.body

    const {
        title,
        program_type,
        rating,
        runtime,
        nationality,
        yr_released,
        production,
        showing,
        poster_url,
        format,
        critic_score,
        description,
        actors,    
        genres,     
        streaming,  
        directors   
    } = data;

    findOrCreate.findOrCreateProduction(
        production,
        res,
        (error, production_id)=> {
            if (error)
                return res.send(error)

            const sqlProgram = `
                INSERT INTO program 
                (title, 
                program_type, 
                rating, 
                runtime, 
                nationality, 
                yr_released, 
                production_id, 
                showing, 
                poster_url, 
                format, 
                critic_score, 
                description)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`

            const values = [
                title,
                program_type,
                rating, 
                runtime, 
                nationality, 
                yr_released,
                production_id, 
                showing, 
                poster_url, 
                format, 
                critic_score, 
                description
            ];

            con.query(
                sqlProgram,
                values,
                (error, result)=> {
                    if (error)
                        return res.send(error)

                    const program_id = result.insertId

                    actors.forEach(actor=> {
                        findOrCreate.findOrCreateActor(
                            actor.first_name,
                            actor.last_name,
                            res,
                            (error, actor_id)=> {
                                if (!error && actor_id) {
                                    con.query(
                                        `INSERT INTO program_to_actor (program_id, actor_id) VALUES (?, ?);`,
                                        [program_id, actor_id]
                                    )
                                }
                            }
                        )
                    })

                    genres.forEach(genre=> {
                        findOrCreate.findOrCreateGenre(
                            genre,
                            res,
                            (error, genre_id)=> {
                                if (!error && genre_id) {
                                    con.query(
                                        `INSERT INTO program_to_genre (program_id, genre_id) VALUES (?, ?);`,
                                        [program_id, genre_id]
                                    )
                                }
                            }
                        )
                    })

                    streaming.forEach(streaming_platform=> {
                        findOrCreate.findOrCreateStreaming(
                            streaming_platform,
                            res,
                            (error, streaming_platform_id)=> {
                                if (!error && streaming_platform_id) {
                                    con.query(
                                        `INSERT INTO program_to_streaming (program_id, streaming_platform_id) VALUES (?, ?);`,
                                        [program_id, streaming_platform_id]
                                    )
                                }
                            }
                        )
                    })

                    directors.forEach(director=> {
                        findOrCreate.findOrCreateDirector(
                            director.first_name,
                            director.last_name,
                            res,
                            (error, director_id)=> {
                                if (!error && director_id) {
                                    con.query(
                                        `INSERT INTO program_to_director (program_id, director_id) VALUES (?, ?)`,
                                        [program_id, director_id]
                                    )
                                }
                            }
                        )
                    })

                    res.redirect(`/programs/id/${program_id}`)
                }
            )
        }
    )
},

    findProgramInfo: (res, table)=> {

        const sql = `SELECT
            p.program_id,
            p.title,
            p.program_type,
            p.rating,
            p.runtime,
            p.nationality,
            p.yr_released,
            p.showing,
            p.format,
            p.critic_score,
            p.description,
            pr.production AS production_company,
            GROUP_CONCAT(DISTINCT g.genre  ORDER BY g.genre SEPARATOR ', ') AS genres,
            GROUP_CONCAT(DISTINCT CONCAT(a.first_name, ' ', a.last_name)
                ORDER BY a.last_name, a.first_name SEPARATOR ', ') AS actors,
            GROUP_CONCAT(DISTINCT CONCAT(d.first_name, ' ', d.last_name)
                 ORDER BY d.last_name, d.first_name SEPARATOR ', ') AS directors,
            GROUP_CONCAT(DISTINCT sp.streaming_platform
                 ORDER BY sp.streaming_platform SEPARATOR ', ') AS streaming_platforms

        FROM program p

        LEFT JOIN production pr
            ON p.production_id = pr.production_id

        LEFT JOIN program_to_genre pg
            ON p.program_id = pg.program_id
        LEFT JOIN genre g
            ON pg.genre_id = g.genre_id

        LEFT JOIN program_to_actor pa
            ON p.program_id = pa.program_id
        LEFT JOIN actor a
            ON pa.actor_id = a.actor_id

        LEFT JOIN program_to_director pd
            ON p.program_id = pd.program_id
        LEFT JOIN director d
            ON pd.director_id = d.director_id

        LEFT JOIN program_to_streaming ps
            ON p.program_id = ps.program_id
        LEFT JOIN streaming_platform sp
            ON ps.streaming_platform_id = sp.streaming_platform_id

        GROUP BY
            p.program_id
        ORDER BY p.program_id ASC;`

        con.query(
            sql,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    },

    filterByGenre: (res, table, id)=> {
        const sql = `SELECT 
            p.title,
            p.yr_released,
            p.poster_url
        FROM program p
        INNER JOIN program_to_genre pg
        ON p.program_id = pg.program_id
        WHERE pg.genre_id = ?
        ORDER BY p.title;`

        con.query(
            sql,
            id,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = programDao