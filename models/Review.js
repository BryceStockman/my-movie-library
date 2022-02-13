const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Movie = require('./Movie.js');
const User = require('./User.js');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },
    review_score: {
      // TO DO: Validate score between 1-5 (full integer)
      type: DataTypes.INTEGER
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;