import Router from 'koa-router'

const index = new Router()

index
  .get('/', async (ctx, next) => {
    // 渲染模板
    await ctx.render('index', { title: 'Koa2-Easy' })
  })
  .get('/index', async (ctx, next) => {
    // 发送静态文件
    await ctx.send(ctx, 'index.html', { root: 'static/index' })
  })
  
export default index
