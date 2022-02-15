const router = require('express').Router();
const fetch = require('node-fetch');
const { UserMovie, Movie, User } = require('../models');
const jwt = require('jsonwebtoken')
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


router.get('/', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})


// router.get('/home', (req, res) => {

//     return res.render('homepage', { loading: true});

// })

router.get('/home', (req, res) => {
    
    const token = req.query.token

    if(!token){
        return res.render('homepage', { loading: true })
    }
    // // verify and decode the token to get the user ID 
    // console.log(token)
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decodedToken)

    // Call movie api and get all movies in library
    // For each movie, call omdbapi for each title to get the poster
    UserMovie.findAll({
        where: {
            user_id: decodedToken.id,
        },// this needs to be the user_id so we can get all the movies for the user,
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

        await sleep(1000);

        const toWatch = movieData.filter(movie => movie.movie_shelf === 'to watch');
        const watched = movieData.filter(movie => movie.movie_shelf === 'watched');

    //     // console.log(movieData)
    return res.render('homepage', {watched: watched, to_watch: toWatch, loading: false});
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
                    console.log(data)
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

