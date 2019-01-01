const path = require('path');
const express = require('express');
const ForestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./models');
const secret = require('../config/secret');
const app = express();

// static files
app.use(express.static('public'));

app.use(
  ForestAdmin.init({
    modelsDir: path.resolve('./src/models'),
    envSecret: secret.FOREST_ENV_SECRET,
    authSecret: secret.FOREST_AUTH_SECRET,
    sequelize
  })
);


// start server
app.listen(process.env.PORT || 5000, err => {
  if (err) {
    console.error(err)
    throw err
  }

  console.log('Api is running on port 5000')
});