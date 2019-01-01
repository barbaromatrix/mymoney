On config, create a file called `secret.js`, following the structure bellow:
```js
module.exports = {
  DATABASE_PASSWORD: 'your_postgres_password',
  FOREST_ENV_SECRET: 'your_forest_env_secret',
  FOREST_AUTH_SECRET: 'your_forest_auth_secret'
};
```