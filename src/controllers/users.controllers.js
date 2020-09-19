// External Dependancies
const boom = require('boom')
const PermissionMiddleware = require('../shared/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../shared/middlewares/auth.validation.middleware');
const config = require('../shared/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const CUSTOMER = config.permissionLevels.CUSTOMER;
const FARMER = config.permissionLevels.FARMER;


// Get Data Models
const User = require('../model/users.model')
const userMiddleware = require('../middleware/userMiddleware')

// Get all users
exports.getUsers = async  (req, reply) => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user by ID
exports.getSingleUser =  async(req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addUser = (userMiddleware.resgister , async (req, reply) => {
  let salt = crypto.randomBytes(16).toString('base64');
  let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
  req.body.password = salt + "$" + hash;
  try {
    const user = new User(req.body)
    return user.save()
  } catch (err) {
    throw boom.boomify(err)
  }
})

// Update an existing car
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = req.body
    const { ...updateData } = user
    const update = await User.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}