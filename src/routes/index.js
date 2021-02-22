const router = require('express').Router()

router.use('/pokemon/', require('./pokemons'))

module.exports = router