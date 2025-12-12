const con = require ('../config/dbconfig')


function findOrCreateProduction(productionName, res, result) {
    if (!productionName) 
        return result(null, null)

    const sqlFind = `
        Select production_id FROM production WHERE production = ?;`

    con.query(
        sqlFind,
        [productionName],
        (error, rows)=> {
            if (error)
                return result(error)

            if (rows.length > 0) {
                return result(null, rows[0].production_id)
            }

            const sqlInsert = `
            INSERT INTO production (production) VALUES (?);`

            con.query(
                sqlInsert, 
                [productionName], 
                (error2, rows2)=> {
                    if (error2)
                        return result(error2)
                    return result(null, rows2.insertId)
                }
            )
        }
    )
}

function findOrCreateActor(actorFName, actorLName, res, result) {
    if(!actorFName && !actorLName)
        return result(null, null)

    const sqlFind = `
    Select actor_id FROM actor WHERE first_name = ? AND last_name = ?`

    con.query(
        sqlFind,
        [actorFName, actorLName],
        (error, rows)=> {
            if (error)
                return result(error)

            if (rows.length > 0) {
                return result(null, rows[0].actor_id)
            }
            
            const sqlInsert = `
            INSERT INTO actor (first_name, last_name) VALUES (?, ?)`

            con.query(
                sqlInsert,
                [actorFName, actorLName],
                (error2, rows2)=> {
                        if (error2)
                            return result(error2)
                        return result(null, rows2.insertId)
                }
            )
        }
    )
}

function findOrCreateGenre(genre, res, result) {
    if(!genre)
        return result(null, null)

    const sqlFind = `
    SELECT genre_id FROM genre WHERE genre = ?`

    con.query(
        sqlFind,
        [genre],
        (error, rows)=> {
            if (error)
                return result(error)

            if (rows.length > 0) {
                return result(null, rows[0].genre_id)
            }

                const sqlInsert = `
                INSERT INTO genre (genre) VALUES (?)`

                con.query(
                    sqlInsert,
                    [genre],
                    (error2, rows2)=> {
                        if (error2)
                            return result(error2)
                        return result(null, rows2.insertId)
                    }
                )
        }
    )
}

function findOrCreateStreaming(service, res, result) {
    if(!service)
        return result(null, null)

    const sqlFind = `
    SELECT streaming_platform_id FROM streaming_platform WHERE streaming_platform = ?`

    con.query(
        sqlFind,
        [service],
        (error, rows)=> {
            if (error)
                return result(error)

            if (rows.length > 0) {
                return result(null, rows[0].streaming_platform_id)
            }

            const sqlInsert = `
            INSERT INTO streaming_platform (streaming_platform) VALUES (?)`

            con.query(
                sqlInsert,
                [service],
                (error2, rows2)=> {
                    if (error2)
                        return result(error2)
                    return result(null, rows2.insertId)
                }
            )
        }
    )
}

function findOrCreateDirector(directorFName, directorLName, res, result) {
    if(!directorFName && !directorLName)
        return result(null, null)

    const sqlFind = `
    Select director_id FROM director WHERE first_name = ? AND last_name = ?`

    con.query(
        sqlFind,
        [directorFName, directorLName],
        (error, rows)=> {
            if (error)
                return result(error)

            if (rows.length > 0) {
                return result(null, rows[0].director_id)
            }

            const sqlInsert = `
            INSERT INTO director (first_name, last_name) VALUES (?, ?)`

            con.query(
                sqlInsert,
                [directorFName, directorLName],
                (error2, rows2)=> {
                    if(error2)
                        return result(error2)
                    return result(null, rows2.insertId)
                }
            )
        }
    )
}

module.exports = {
    findOrCreateProduction,
    findOrCreateActor,
    findOrCreateGenre,
    findOrCreateStreaming,
    findOrCreateDirector
}