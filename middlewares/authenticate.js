const jwt = require('jsonwebtoken');
const keys = require('./keys')();
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = async function (ctx) {

  const email = ctx.request.body.email;
  const password = ctx.request.body.password;


  const user = await User.findOne({ email: email });
  const passwordMatches = await userPasswordMatches(user.password, password);
  if (user && passwordMatches) {
      authenticationSuccessful(ctx);
    }
    else {
      authenticationFailed(ctx);
    }
}

function userPasswordMatches(userPassword, password) {
  return bcrypt.compare(password, userPassword);
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
