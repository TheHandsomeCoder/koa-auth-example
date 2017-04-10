const jwt = require('jsonwebtoken');
const keys = require('./keys')();
const User = require('../models/user');

module.exports = async function (ctx) {

  const email = ctx.request.body.email;
  const password = ctx.request.body.password;

  const user = await User.findOne({ email: email });
  if (user && userPasswordMatches(user, password)) {
      authenticationSuccessful(ctx);
    }
    else {
      authenticationFailed(ctx);
    }
}

function userPasswordMatches(user, password) {
  return user.password == password;
}

function authenticationSuccessful(ctx) {
  ctx.status = 200;
  ctx.cookies.set(keys.cookie, jwt.sign({ role: 'admin' }, keys.secretKey));
  ctx.body = {
    message: "Successfully logged in!"
  };
}

function authenticationFailed(ctx) {
  ctx.status = 401;
  ctx.body = {
    message: "Authentication failed"
  };
}
