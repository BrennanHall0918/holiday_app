const daoCommon = require('./common/daoCommon')

const programDao = {
    ...daoCommon,
    ...require('./api/programDao')
}

const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')
}

const directorDao = {
    ...daoCommon,
    ...require('./api/directorDao')
}

const genreDao = {
    ...daoCommon,
    ...require('./api/genreDao')
}

const productionDao = {
    ...daoCommon,
    ...require('./api/productionDao')
}


module.exports = {
    programDao,
    actorDao,
    directorDao,
    genreDao,
    productionDao
}
