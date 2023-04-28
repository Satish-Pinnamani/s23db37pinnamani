var express = require('express');
const games_controlers= require('../controllers/games');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET update costume page */
router.get('/update', secured,
costume_controlers.costume_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
if(req.session.returnTo)
res.redirect(req.session.returnTo);
res.redirect('/');
});











//GET request for one games.
router.get('/', games_controlers.games_view_all_Page);
router.get('/detail',secured, games_controllers.games_view_one_Page);
router.get('/create', secured,games_controllers.games_create_Page);

router.get('/delete',secured, games_controllers.games_delete_Page);

router.get('/update', secured,games_controllers.games_update_Page);
/* GET costumes */
router.get('/', games_controlers.games_view_all_Page );

/* GET detail costume page */
router.get('/detail', games_controlers.games_view_one_Page);

/* GET create costume page */
router.get('/create', games_controlers.games_create_Page);

/* GET create update page */
router.get('/update', games_controlers.games_update_Page);

/* GET delete costume page */
router.get('/delete', games_controlers.games_delete_Page);





module.exports = router;
