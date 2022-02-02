const getMovies = function () {
  // let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=${movieTitle}`;
  let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=Blade+Runner+2049`;
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

const getMoviePosters = function () {
  fetch('');
};

getMovies();
