const router = require('express').Router();
const fetch = require('node-fetch');
const { UserMovie, Movie, User } = require('../models');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

router.get('/', (req, res) => {
    console.log("hello")
    // Call movie api and get all movies in library
    // For each movie, call omdbapi for each title to get the poster
    UserMovie.findAll({
        attributes: ['id', 'movie_id', 'user_id', 'movie_shelf'],
        include: [
            {
                model: Movie,
                attributes: ['id', 'movie_name', 'imdb_id']
            }
        ]

    }).then(async movieData => {
        movieData = movieData.map(el => el.get({ plain: true }))
      

        // call the api and get the poster for each title
        for (let i = 0; i < movieData.length; ++i) {
            let movieUrl = `http://www.omdbapi.com/?apikey=5205bbcf&i=${movieData[i].movie.imdb_id}`;
            fetch(movieUrl).then(function (response) {
                response.json().then(function (data) {
                    //console.log(data);
                    movieData[i].Poster = data.Poster;
                })
            })
        }

        await sleep(2000);

        const toWatch = movieData.filter(movie => movie.movie_shelf === 'to watch');
        const watched = movieData.filter(movie => movie.movie_shelf === 'watched');

        console.log(movieData)
        res.render('homepage', {to_watch: toWatch, watched : watched});
    })
})

router.get('/search', (req, res) => {
    if (req.query.title) {
        let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&s=${req.query.title}`;

        fetch(apiUrl).then(function (response) {
            response.json().then(function (data) {
                if (data.Response === 'False') {
                    console.log('Please enter a valid movie title');
                } else {
                    res.render('search', data);
                }
            });
        });
    }
    else {
        res.render('search', null)
    }

});

module.exports = router;