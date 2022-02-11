// Will change to suit HTML identifier and functionality that Kai and Kayce build

let movieDisplay = document.querySelector('#movie-display');

let movieTitle;

const getMovies = function (movieTitle) {
  // This is the dynamic URL once the search bar and functionality has been set up
  let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&s=${movieTitle}`;

  //let apiUrl = `http://www.omdbapi.com/?apikey=5205bbcf&t=Blade+Runner+2049`;
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

const displayMovies = function (movies) {
  while (movieDisplay.hasChildNodes()) {
    movieDisplay.removeChild(movieDisplay.childNodes[0]);
  }
  let movieShelf = document.createElement('div');
  movieShelf.classList = 'row d-flex';
  let count = 0;

  for (var i = 0; i < movies.Search.length; i++) {
    const movieData = movies.Search[i];
    // Still need to finalize the logic for creating the movie display
    // shelf for movies

    // movie item
    let movieItem = document.createElement('div');
    movieItem.classList = 'col-sm-12 col-md-3 col-lg-2 movie text-center';
    movieInformationList = document.createElement('ul');

    console.log(movieData.Title);
    let movieObject = {
      title: movieData.Title,
      //actors: movieData.Actors,
      //boxOffice: movieData.BoxOffice,
      //plot: movieData.Plot,
      //rottenTomatoes: movieData.Ratings[1].Value,
      //releaseDate: movieData.Released,
      //writer: movieData.Writer,
      //imdbRating: movieData.imdbRating,
    };

    Object.values(movieObject).forEach((listItem) => {
      movieInformationItem = document.createElement('li');
      movieInformationItem.textContent = listItem;
      // console.log(listItem);
      movieInformationList.appendChild(movieInformationItem);
    });

    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    let poster = movieData.Poster;
    let moviePoster = document.createElement('img');
    moviePoster.setAttribute('src', poster);
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    // console.log(moviePoster);
    imageContainer.appendChild(moviePoster);
    imageContainer.appendChild(deleteBtn);
    movieItem.appendChild(imageContainer);

    // console.log(movieInformationList);

    //movieItem.appendChild(movieInformationList);
    let addBtn = document.createElement('button');
    addBtn.textContent = 'To Watch';
    addBtn.classList = 'to-watch';
    movieItem.appendChild(addBtn);
    addBtn = document.createElement('button');
    addBtn.textContent = 'Watched';
    addBtn.classList = 'watched';
    movieItem.appendChild(addBtn);
    movieShelf.appendChild(movieItem);
    movieDisplay.appendChild(movieShelf);
    count++;
    if (count >= 6) {
      break;
    }
  }
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

// userFormEl.addEventListener('submit', formSubmitHandler);
