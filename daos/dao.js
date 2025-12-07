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

const streaming_platformDao = {
    ...daoCommon,
    ...require('./api/streaming_platformDao')
}

const program_to_actorDao = {
    ...daoCommon,
    ...require('./api/program_to_actorDao')
}

const program_to_directorDao = {
    ...daoCommon,
    ...require('./api/program_to_directorDao')
}

const program_to_genreDao = {
    ...daoCommon,
    ...require('./api/program_to_genreDao')
}

const program_to_streamingDao = {
    ...daoCommon,
    ...require('./api/program_to_streamingDao')
}


module.exports = {
    programDao,
    actorDao,
    directorDao,
    genreDao,
    productionDao,
    streaming_platformDao,
    program_to_actorDao,
    program_to_directorDao,
    program_to_genreDao,
    program_to_streamingDao
}
