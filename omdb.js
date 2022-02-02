// Will change to suit HTML identifier and functionality that Kai and Kayce build
let userFormEl = document.querySelector('#user-form');
let movieInputEl = document.querySelector('#movie-search');
let movieContainerEl = document.querySelector('#movie-container');
let addMovie = document.querySelector('#add-movie');

let movieTitle;

const getMovies = function () {
  // This is the dynamic URL once the search bar and functionality has been set up
  // let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=${movieTitle}`;

  let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=Blade+Runner+2049`;
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      displayMovies(data);
    });
  });
};

const displayMovies = function (movieData) {
  for (let i = 0; i < movieData.length; i++) {
    let title = movieData[i].Title;
    let poster = movieData[i].Poster;
    let actors = movieData[i].Actors;
    let boxOffice = movieData[i].BoxOffice;
    let plot = movieData[i].Plot;
    let rottenTomatoes = movieData[i].Ratings[1];
    let releaseDate = movieData[i].Released;
    let writer = movieData[i].Writer;
    let imdbRating = movieData[i].imdbRating;

    // Still need to finalize the logic for creating the movie display
    
  }
};

// const formSubmitHandler = function (e) {
//   e.preventDefault();
//   targetEl = e.target;

//   let movieTitle = movieInputEl.value.trim();

//   if (movieTitle) {
//     getMovie(movieTitle);
//     movieInputEl.value = '';
//   } else {
//     alert('Please enter a movie title');
//   }
// };

getMovies();

// userFormEl.addEventListener('submit', formSubmitHandler);
