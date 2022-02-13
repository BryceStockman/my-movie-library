const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Movie = require('./Movie');
const User = require('./User');

class UserMovie extends Model {}

UserMovie.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Movie,
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    movie_shelf: {
      type: DataTypes.ENUM('watched', 'to watch')
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_movie'
  }
);

module.exports = UserMovie;