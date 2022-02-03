// Will change to suit HTML identifier and functionality that Kai and Kayce build
let userFormEl = document.querySelector('#user-form');
let movieInputEl = document.querySelector('#movie-search');
let movieContainerEl = document.querySelector('#movie-container');
let addMovie = document.querySelector('#add-movie');
let movieDisplay = document.querySelector('.movie-poster');

let movieTitle;

const getMovies = function () {
  // This is the dynamic URL once the search bar and functionality has been set up
  // let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=${movieTitle}`;

  let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=Blade+Runner+2049`;
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      if (data.Response === 'False') {
        alert('Please enter a valid movie title');
      } else {
        displayMovies(data);
      }
    });
  });
};

const displayMovies = function (movieData) {
  // Still need to finalize the logic for creating the movie display
  // shelf for movies
  let movieShelf = document.createElement('div');
  movieShelf.classList = 'row';
  // movie item
  let movieItem = document.createElement('div');
  movieItem.classList = 'col-sm-12 col-md-3 col-lg-2';
  movieInformationList = document.createElement('ul');

  let movieObject = {
    title: movieData.Title,
    actors: movieData.Actors,
    boxOffice: movieData.BoxOffice,
    plot: movieData.Plot,
    rottenTomatoes: movieData.Ratings[1].Value,
    releaseDate: movieData.Released,
    writer: movieData.Writer,
    imdbRating: movieData.imdbRating,
  };

  Object.values(movieObject).forEach((listItem) => {
    movieInformationItem = document.createElement('li');
    movieInformationItem.textContent = listItem;
    console.log(listItem);
    movieInformationList.appendChild(movieInformationItem);
  });

  let poster = movieData.Poster;
  let moviePoster = document.createElement('img');
  moviePoster.setAttribute('src', poster);
  console.log(moviePoster);

  console.log(movieInformationList);

  movieItem.appendChild(movieInformationList);
  movieShelf.appendChild(movieItem);
};

// const formSubmitHandler = function (e) {
//   e.preventDefault();
//   targetEl = e.target;

//   let movieTitle = movieInputEl.value.trim();

//   if (movieTitle) {
//     getMovies(movieTitle);
//     movieInputEl.value = '';
//   } else {
//     alert('Please enter a movie title');
//   }
// };

getMovies();

// userFormEl.addEventListener('submit', formSubmitHandler);
