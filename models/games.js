const mongoose = require("mongoose");

const gamesSchema = mongoose.Schema({
  game_name:  {type:String , required: true, minLength:[1,'itemname']},
  number_of_players: { type: Number, required: true,min: 0, max: 600 },
  game_price: {type:String,required: true,maxLength:[8,'color']}, 
});

module.exports = mongoose.model("games", gamesSchema);