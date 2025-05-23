const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
