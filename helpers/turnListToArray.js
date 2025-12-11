function turnListToArray(lists) {
    return function (req, res, next) {
        lists.forEach(list=> {
            const submittedValue = req.body[list]

            if (!submittedValue) {
                req.body[list] = []
                return
            }

            req.body[list] = submittedValue
                .split(',')
                .map(s=> s.trim())
                .filter(Boolean)
                .map(Number)
        })

        next()
    }
}

module.exports = turnListToArray