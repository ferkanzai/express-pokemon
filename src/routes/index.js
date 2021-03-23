const router = require('express').Router()

router.use('/pokemon/', require('./pokemons.routes'))

module.exports = router