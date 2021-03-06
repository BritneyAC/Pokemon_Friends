const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
  userId: String,
  pokemonId: String
}, {
  timestamps: true,
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;