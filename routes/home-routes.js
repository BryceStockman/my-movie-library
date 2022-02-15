const router = require('express').Router();
const fetch = require('node-fetch');
//const { SequelizeScopeError } = require('sequelize/types');
const {UserMovie, Movie, User} = require('../models');

router.get('/search', (req, res) => {
    if (req.query.title) {
        let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&s=${req.query.title}`;

        fetch(apiUrl).then(function (response) {
            response.json().then(function (data) {
                console.log(data);
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

router.get('/', (req,res) => {
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
        const toWatch = movieData.filter(movie => movie.movie_shelf === 'to watch');
        console.log(toWatch);
        const watched = movieData.filter(movie => movie.movie_shelf === 'watched');
        console.log(watched);

        // call the api and get the poster for each title
        for( let i = 0; i < movieData.length; ++i)
        {
          let movieUrl = `http://www.omdbapi.com/?apikey=5205bbcf&i=${movieData[i].movie.imdb_id}`;
          fetch(movieUrl).then(function(response) {
            response.json().then(function(data){
                console.log(data);
                movieData[i].Poster = data.Poster;
            })
          })
        }

        await sleep(2000)
        console.log(movieData)
        res.render('homepage', movieData);
    })    
})
module.exports = router;