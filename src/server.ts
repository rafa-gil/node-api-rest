import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'hello world'
})

app
  .listen({
    port: 3308,
  })
  .then(() => {
    console.log('server running on port 3308')
  })
