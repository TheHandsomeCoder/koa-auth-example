const koaJwt = require('koa-jwt');
const keys = require('./keys')();

module.exports = koaJwt({
  //TODO: change this to use a path variable
  secret: keys.secretKey, // Should not be hardcoded
  cookie: keys.cookie
});
