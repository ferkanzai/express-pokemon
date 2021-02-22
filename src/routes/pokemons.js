const fetch = require('node-fetch');

const router = require('express').Router();

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const pokemon = await response.json();

    res.status(200).json({
      status: 'ok',
      data: pokemon,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
