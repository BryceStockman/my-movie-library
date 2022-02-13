const { Movie } = require('../models');

const movieData = [
  {
    movie_name: 'Blade Runner',
    imdb_id: 'tt0083658'
  },
  {
    movie_name: 'Penelope',
    imdb_id: 'tt0472160'
  },
  {
    movie_name: 'Encanto',
    imdb_id: 'tt2953050'
  }
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;