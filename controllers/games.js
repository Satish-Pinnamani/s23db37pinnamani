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

// for a specific Costume.
exports.games_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await games.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle Costume update form on PUT.
exports.games_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await games.findById( req.params.id)
// Do updates of properties
if(req.body.game_name)
toUpdate.game_name = req.body.game_name;
if(req.body.number_of_players) toUpdate.number_of_players = req.body.number_of_players;
if(req.body.game_price) toUpdate.game_price = req.body.game_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle Costume delete on DELETE.
exports.games_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await games.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle a show one view with id specified by query
exports.games_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await games.findById( req.query.id)
    res.render('gamesdetail',
    { title: 'games Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.games_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('gamescreate', { title: 'games Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.games_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await games.findById(req.query.id)
    res.render('gamesupdate', { title: 'games Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

// Handle a delete one view with id from query
exports.games_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await games.findById(req.query.id)
    res.render('gamesdelete', { title: 'games Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    


    
    
