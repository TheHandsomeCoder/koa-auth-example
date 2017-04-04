const koaJwt = require('koa-jwt');

module.exports = koaJwt({
  //TODO: change this to use a path variable
  secret: 'I would have been your daddy, but the dog beat me over the fence!', // Should not be hardcoded
  cookie: 'AHL-JWT-Bundle'
});
