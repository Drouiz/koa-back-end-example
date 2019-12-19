const Router = require('koa-router');

const FilmModel = require('../models/film.model');

const router = new Router({
    prefix: '/films'
});

router
  .get('/', async (ctx, next) => {
    const query = ctx.request.query;
    await FilmModel.find(query)
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el get')
        console.log(err)
        ctx.body = err;
    });

  })
  .post('/', async (ctx, next) => {
    await  FilmModel(ctx.request.body).save()
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el post')
        console.log(err)
        ctx.body = err;
    });
  })
  .put('/:id', async (ctx, next) => {
    await FilmModel(ctx.request.body).save()
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el post')
        console.log(err)
        ctx.body = err;
    });
  })
  .del('/:id', (ctx, next) => {
    ctx.body = 'DEL';
  })
  .get('/:id', async (ctx, next) => {
    await FilmModel.findById(ctx.params.id)
    .then(result => {
        ctx.body = result;
    }).catch(err => {
        // TODO: error definido y no definido
        console.log('error en el get all')
        console.log(err)
        ctx.body = err;
    });

  })

  module.exports = router;