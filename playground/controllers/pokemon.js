const Pokemon = require("../models/pokemon");

exports.getPokemon = async (req, res, next) => {
  const offset = req.query.offset || 0;
  const limit = req.query.limit || 10;
  const search = req.query.search || "";
  let totalItems;
  try {
    totalItems = await Pokemon.find().countDocuments();

    const list = await Pokemon.find({ name: { $regex: search } })
      .skip(offset)
      .limit(limit)
      .sort("index");

    res.status(200).json({
      results: list.map((poke) => {
        return {
          name: poke.name,
          index: poke.index,
        };
      }),
      count: totalItems,
    });
  } catch (err) {
    if (err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
  /* 
    .catch((err) => {
     
    }); */
};

exports.getPokemonDetail = async (req, res, next) => {
  const index = req.params.id;
  try {
    const pokemon = await Pokemon.findOne({ index: index });
    res.status(200).json({
      detail: pokemon,
    });
  } catch (error) {
    if (error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
