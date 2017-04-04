var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var KoaBetterBody = require('koa-better-body');
var convert = require('koa-convert');


var app = new Koa();
var router = new Router();

const customerService = require('./services/customerService');
const authenticate = require('./middlewares/authenticate.js');
const jwt = require('./middlewares/jwt');

//app.use(koaBetterBody({fields: 'body'}));

//app.use(serve('./client', '/'));

router.get('/', async function (ctx, next) {
    ctx.body = 'Hello World!';
})

router.post('/login', async function(ctx, next) {
  authenticate(ctx);
});

router.get('/customers',jwt, async function(ctx, next) {
   ctx.body = customerService.getCustomers();
});

app
  .use(serve('./client/'))
  .use(convert(KoaBetterBody({fields: 'body'})))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
