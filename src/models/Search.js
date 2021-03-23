const mongoose = require('mongoose')
const { Schema } = mongoose

const SearchSchema = new Schema({
  searchedField: String,
  expirationDate: {
    type: Date,
    default: () => new Date(+new Date() + 60*60*1000)
  },
})

const Search = mongoose.model('Search', SearchSchema)

module.exports = Search