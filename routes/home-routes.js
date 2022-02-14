const router = require('express').Router();
const fetch = require('node-fetch');

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
    res.render('homepage')
})
module.exports = router;