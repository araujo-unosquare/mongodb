const axios = require("axios");
const Pokemon = require("../models/pokemon");

async function populateDb() {
  let result = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1500"
  );
  for (let [index, item] of result.data.results.entries()) {
    let poke = new Pokemon({ index: index + 1, name: item.name });
    poke.save();
  }
}

exports.populateDb = populateDb;
