function insertIntoPivot(table, column, program_id, list) {
    if (!list || list.length === 0)
        return

    const sql = `
        INSERT INTO ${table} (program_id, ${column})
        VALUES ?
        `

    const values = list.map(id => [program_id, id])

    con.query(
        sql,
        [values],
        (error)=> {
            if (error)
                console.log(`Error inserting into ${table}`, error)
        }
    )
}

module.exports = { insertIntoPivot }