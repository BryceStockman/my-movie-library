const router = require('express').Router();

const movieRoutes = require('./movie-routes');

router.use('/user_movies', movieRoutes);




module.exports = router;