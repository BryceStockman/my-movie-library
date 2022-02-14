const Movie = require ('./Movie');
const Review = require ('./Review');
const User = require ('./User');
const UserMovie = require ('./UserMovie');


// Users belongToMany Movies (through UserMovie)
//User.belongsToMany(Movie, { through: UserMovie, foreignKey: 'movie_id' });

// Movies belongToMany Users (through UserMovie)
//Movie.belongsToMany(User, { through: UserMovie, foreignKey: 'user_id' });

UserMovie.belongsTo(User, {foreignKey: 'user_id'});
UserMovie.belongsTo(Movie, {foreignKey: 'movie_id'});

// Movies Have many reviews
Movie.hasMany(Review);

// Users have Many reviews
User.hasMany(Review);

module.exports = {
  Movie,
  Review,
  User,
  UserMovie,
};