const CONFIG = require('./secret')

module.exports = {
  development: {
    username: 'mymoney',
    password: CONFIG.DATABASE_PASSWORD,
    database: 'mymoney',
    host: '172.17.0.2',
    dialect: 'postgres',
    force: true
  },
  test: {
    username: 'mymoney',
    password: CONFIG.DATABASE_PASSWORD,
    database: 'mymoney_test',
    host: '172.17.0.2',
    dialect: 'postgres',
    logging: false
  }
}
