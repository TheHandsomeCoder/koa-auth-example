const koaJwt = require('koa-jwt');
const keys = require('./keys')();

module.exports = koaJwt({
  secret: keys.secretKey,
  cookie: keys.cookie
});
