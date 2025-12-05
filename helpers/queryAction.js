const queryAction =(obj, error, rows, table)=> {

    if (!error) {
        if (rows.length === 1) {
            obj.json(...rows)
        } else {
            obj.json(rows)
        }
    } else {
        console.log(`Dao Error: ${error}`)
        obj.json({
            'message': 'error',
            'table': `${t}`,
            'error': error
        })
    }
}

module.exports = { queryAction } 