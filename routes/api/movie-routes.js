const router = require('express').Router();

const sequelize = require('../../config/connection');

const { UserMovie, Movie, User } = require('../../models');

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


router.post('/', (req, res) => {
    // expects req.body.movie_id req.body.user_id, req.body.imdb_id
    // check to see if this movie exists in the movie table
    Movie.findOne(
        {
            where: {
                imdb_id: req.body.imdb_id
            }
        }
    ).then(async movie => {
        if (movie != null) {
            movie = movie.get({ plain: true })

            console.log("Movie found",movie)

            addUserMovie(movie.id, 1, req.body.movie_shelf)
            res.json(movie)
        }
        else {
            console.log("Movie not found")

            Movie.create({
                //movie_id: req.body.movie_id,
                imdb_id: req.body.imdb_id,
                movie_name: req.body.movie_name,
            }).then(async dbmovieData => {
                console.log(dbmovieData);
                addUserMovie(dbmovieData.id, 1, req.body.movie_shelf)
                res.json(dbmovieData)
            })
        }

    })


})

const addUserMovie = function (movie_id, user_id, movie_shelf) {
    console.log("Add user movie", movie_id, user_id, movie_shelf)

    UserMovie.findOne({
        where: {
            movie_id: movie_id,
            user_id: user_id
        }
    }).then(theMovie => {
        if (theMovie == null) {
            UserMovie.create({
                movie_id: movie_id,
                user_id: user_id,
                movie_shelf: movie_shelf
            }).then(userMovieData => {
                console.log(userMovieData)
            })
        }
    })

    return;
}

module.exports = router;