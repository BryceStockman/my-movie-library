const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const movieRoutes = require('./api');
router.use('/',homeRoutes);

module.exports = router;