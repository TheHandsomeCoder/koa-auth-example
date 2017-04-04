const koaJwt = require('koa-jwt');

module.exports = koaJwt({
  secret: 'I would have been your daddy, but the dog beat me over the fence!', // Should not be hardcoded
  cookie: 'whyJamesCryin'
});
