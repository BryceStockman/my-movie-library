const { User } = require('../models');

const userData = [
  {
    user_name: 'tylern',
    password: 'Password1'
  },
  {
    user_name: 'milobeguilo',
    password: 'Password2'
  },
  {
    user_name: 'jessgro',
    password: 'Password3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;