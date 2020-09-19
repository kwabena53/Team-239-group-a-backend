exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Shoku API',
        description: 'Web application API for Shoku app',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'shoku-api.herokuapp.com/',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  }