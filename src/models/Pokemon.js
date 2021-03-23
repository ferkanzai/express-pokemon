const mongoose = require('mongoose')
const { Schema } = mongoose

const PokemonSchema = new Schema({
  name: String,
  id: String,
})

const Pokemon = mongoose.model('Pokemons', PokemonSchema)

module.exports = Pokemon