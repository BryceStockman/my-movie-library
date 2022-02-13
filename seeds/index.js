const seedMovies = require('./movie-seeds');
const seedUsers = require('./user-seeds');
const seedReviews = require('./review-seeds');
const seedUserMovies = require('./user-movie-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedMovies();
  console.log('\n----- MOVIES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEW SEEDED -----\n')

  await seedUserMovies();
  console.log('\n----- USER MOVIES SEEDED -----\n')
  
  process.exit(0);
};

seedAll();