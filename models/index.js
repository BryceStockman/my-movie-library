const Movie = require ('./Movie');
const Review = require ('./Review');
const User = require ('./User');
const UserMovie = require ('./UserMovie');


// Users belongToMany Movies (through UserMovie)
User.belongsToMany(Movie, { through: UserMovie });

// Movies belongToMany Users (through UserMovie)
Movie.belongsToMany(User, { through: UserMovie });

// Movies Have many reviews
Movie.hasMany(Review)

// Users have Many reviews
User.hasMany(Review)