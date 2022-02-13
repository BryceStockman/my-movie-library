// pull Model and Datatypes from the sequelize library
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define columns
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password : {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    uinderscored: true,
    modelName: 'user',
  }
);

module.exports = User;
