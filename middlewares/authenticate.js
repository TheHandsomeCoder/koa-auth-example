const jwt = require('koa-jwt');

module.exports = function (ctx) {
  if (ctx.request.body.password === 'password') {
    ctx.status = 200;
    ctx.cookies.set('whyJamesCryin', jwt.sign({ role: 'admin' }, 'A very secret key'));
    ctx.body = {
      message: "Successfully logged in!"
    };
  } else {
    ctx.status = ctx.status = 401;
    ctx.body = {
      message: "Authentication failed"
    };
  }
  return ctx;
}
