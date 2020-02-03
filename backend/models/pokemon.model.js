const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 16
  },
  species:{
    type: Number,
    required: true,
    min: 1,
    max: 807
  },
  dateCaught:{
    type: Date,
    required: true,
  },
  description:{
    type: String,
    minlength: 3,
    maxlength: 256
  }
}, {
  timestamps: true,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;