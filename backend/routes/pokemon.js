const router = require("express").Router();
let Pokemon = require("../models/pokemon.model");

router.route("/").get((req, res) => {
  Pokemon.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const species = req.body.species;
  const dateCaught = Date.parse(req.body.dateCaught);
  const description = req.body.description;
  const newPokemon = new Pokemon({
    name,
    species,
    dateCaught,
    description
  });

  newPokemon.save()
    .then(() => res.json("Pokemon added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = router;