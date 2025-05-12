const express = require("express");

const pokemonController = require("../controllers/pokemon");

const router = express.Router();

router.get("/pokemon", pokemonController.getPokemon);

router.get("/pokemon/:id", pokemonController.getPokemonDetail);

module.exports = router;
