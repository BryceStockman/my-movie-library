const { UserMovie } = require('../models');

const userMovieData = [
  {
    movie_id: 1,
    user_id: 1,
    movie_shelf: 'watched'
  },
  {
    movie_id: 2,
    user_id: 1,
    movie_shelf: 'watched'
  },
  {
    movie_id: 1,
    user_id: 2,
    movie_shelf: 'watched'
  },
  {
    movie_id: 3,
    user_id: 3,
    movie_shelf: 'to watch'
  }
];

const seedUserMovies = () => UserMovie.bulkCreate(userMovieData);

module.exports = seedUserMovies;