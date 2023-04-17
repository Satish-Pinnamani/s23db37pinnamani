var games = require('../models/games');
// // List of all Costumes
// exports.games_list = function(req, res) {
// res.send('NOT IMPLEMENTED: games list');
// };
// List of all Costumes
exports.games_list = async function(req, res) {
    try{
    thegames = await games.find();
    res.send(thegames);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.games_detail = function(req, res) {
res.send('NOT IMPLEMENTED: games detail: ' + req.params.id);
};
// // Handle Costume create on POST.
// exports.games_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: games create POST');
// };
// Handle Costume delete form on DELETE.
exports.games_delete = function(req, res) {
res.send('NOT IMPLEMENTED: games delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.games_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: games update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.games_view_all_Page = async function(req, res) {
    try{
    thegames = await games.find();
    res.render('games', { title: 'games Search Results', results: thegames });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.games_create_post = async function(req, res) {
console.log(req.body)
let document = new games();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.game_name = req.body.game_name;
document.number_of_players = req.body.number_of_players;
document.game_price = req.body.game_price;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
