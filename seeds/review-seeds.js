const { Review } = require('../models');

const reviewData = [
  {
    review_score: 3,
    movie_id: 1,
    user_id: 1
  },
  {
    review_score: 5,
    movie_id: 2,
    user_id: 1
  },
  {
    review_score: 4,
    movie_id: 1,
    user_id: 2
  }
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;