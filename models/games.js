const mongoose = require("mongoose")
const gamesSchema = mongoose.Schema({
    game_name: String,
    number_of_players: String,
    game_price: Number
})
module.exports = mongoose.model("games",
gamesSchema)