const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//const logger = require('koa-logger')

// ROUTES
const films = require('./routes/films.routes');
const bso = require('./routes/bso.routes');

const db = require('./config/db.config');

//DB CONECTING
(() => db.connect())();

const app = new Koa();

app.listen(3000, function(err) {
  if (err) {
    console.error('Error listening in port 3000', err);
    process.exit(1);
  };

  console.log('Koa server listening in port 3000');
});

app.use(bodyParser());

if (process.env.NODE_ENV === 'dev') {
  console.log('Enviorement as Dev in Node Server');
  //app.use(logger());
}

// CLIENT IP 
 app.use(async (ctx, next) => {
   const clientIP = ctx.request.ip;
   console.log('Client IP: ' + clientIP);
   await next();
 });

app.use(films.routes());
app.use(bso.routes());



