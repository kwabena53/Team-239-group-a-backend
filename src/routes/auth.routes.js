// Import our Controllers
const authController = require('../controllers/auth.controllers')

const routes = [
  {
    method: 'POST',
    url: '/api/login',
    handler: authController.authUser
  },
  {
    method: 'POST',
    url: '/api/auth/refresh',
    handler: authController.authRefresh
  }
]

module.exports = routes