const rounter = require('express').Router();

const router = require('../home-routes');

const movieRoutes = require('./movie-routes');

router.use('/user_movies', movieRoutes);




module.exports = router;