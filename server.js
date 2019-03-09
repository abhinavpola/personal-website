const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs');
const path = require('path');

const app = new Koa();

// error handling
app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });


render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})


const router = new Router();
//get routes from routes.js
require('./routes/routes')({ router });


app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(process.env.PORT || 8080);
module.exports = server;