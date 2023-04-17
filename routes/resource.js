var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var games_controller = require('../controllers/games');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/games', games_controller.games_create_post);
// DELETE request to delete Costume.
router.delete('/games/:id', games_controller.games_delete);
// PUT request to update Costume.
router.put('/games/:id', games_controller.games_update_put);
// GET request for one Costume.
router.get('/games/:id', games_controller.games_detail);
// GET request for list of all Costume items.
router.get('/games', games_controller.games_list);
module.exports = router;