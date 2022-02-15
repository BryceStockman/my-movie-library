const exphbs = require('express-handlebars');
const express = require('express');
const routes = require('./routes');
const path = require('path');



const sequelize = require('./config/connection');
const models = require('./models')
//const seeds = require('./seeds')
const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')))





app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});

