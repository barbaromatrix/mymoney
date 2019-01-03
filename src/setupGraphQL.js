const SERVER = require('./graphql/schema');

const setup = (app) =>
  SERVER.applyMiddleware({
    app
  });

module.exports = setup;
