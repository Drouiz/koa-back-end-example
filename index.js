const Koa = require('koa');
//const logger = require('koa-logger')

const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const mongoose = require('mongoose');

//const mongoUri = 'mongodb://192.168.99.100:27017/films';
const mongoUri = 'mongodb+srv://boream:boream@boream-z9ztt.mongodb.net/films?retryWrites=true&w=majority';
db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true }).
  catch(error => console.log(error));


const films = require('./routes/films.routes');


const onDBReady = (err) => {
  if (err) {
    console.log('Error connecting', err);
    throw new Error('Error connecting', err);
  }
};

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

//MW OPTENCION IP
 app.use(async (ctx, next) => {
   const clientIP = ctx.request.ip;
   console.log(clientIP);
   await next();
 });

 router.post('/login',
 async (ctx, next) => { 
   console.log('hola')
   await next();
 }
 ,async (ctx, next) => {
  console.log('login')
  const email = ctx.request.body.email;
  const _id =  ctx.request.body._id;
  ctx.body =  await generateToken(email, _id)
})


app.use(router.routes());
app.use(films.routes());




