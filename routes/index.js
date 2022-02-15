const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const movieRoutes = require('./api');
router.use('/',homeRoutes);
router.use('/api',movieRoutes);

module.exports = router;