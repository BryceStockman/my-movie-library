const router = require('express').Router();
import fetch from'node-fetch';

router.get('/search',(req, res) => {
    let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&s=home alone`;

   fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
       console.log(data);
      if (data.Response === 'False') {
        alert('Please enter a valid movie title');
      } else {
        res.render('homepage', data);
      }
    });
  });
   
});

module.exports = router;