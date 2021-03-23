const fetch = require('node-fetch');

const router = require('express').Router();
const Pokemon = require('../models/Pokemon');
const Search = require('../models/Search');

const { cache } = require('../middlewares')

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

router.get('/:id', [cache(10)], async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    // console.log(response)
    console.log(response.status)
    const pokemon = await response.json();

    const pokemonFormatted = await Pokemon.create({
      name: pokemon.name,
      id: pokemon.id
    })

    res.status(200).json({
      status: 'ok',
      data: pokemonFormatted,
    });
  } catch (err) {
    // const searchedField = await Search.create({
    //   searchedField: id
    // })

    next(err);
  }
});

module.exports = router;
