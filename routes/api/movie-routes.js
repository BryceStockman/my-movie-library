const router = require('express').Router();

const sequelize = require('../../config/connection');

const {UserMovie, Movie, User} = require('../../models');

router.get('/', (req, res) => {
    UserMovie.findAll({
        attributes: ['id', 'movie_id', 'user_id', 'movie_shelf'],
         include: [
             { 
                 model: Movie,
                 attributes: ['id', 'movie_name', 'imdb_id']
             }
         ]
       
    }).then(movieData => {
        res.json(movieData)
    })

})


module.exports = router;