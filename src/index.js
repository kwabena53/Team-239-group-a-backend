require('./dbConnection/db')
const userRoutes = require('./routes/users.routes')
const authRoutes = require('./routes/auth.routes')
const swagger = require('./config/swagger')



const routes = [userRoutes, authRoutes]
// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  // Register Swagger
  fastify.register(require('fastify-swagger'), swagger.options)

  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(3000)
      fastify.swagger()
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }

  routes.forEach(file => {
    file.forEach(route  => {
      fastify.route(route)
     })
  });
 
  
   
  start()