require('dotenv').config();

const Sequelize = require('sequelize');


const sequelizeConnection = process.env.MOVIESDB_URL
  ? new Sequelize(process.env.MOVIESDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

  module.exports = sequelizeConnection;