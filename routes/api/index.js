const router = require('express').Router();

const movieRoutes = require('./movie-routes');
const authRoutes = require('./authentication-routes');

router.use('/user_movies', movieRoutes);
router.use('/auth', authRoutes);




module.exports = router;