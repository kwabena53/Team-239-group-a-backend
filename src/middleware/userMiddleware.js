// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../model/users.model')

exports.resgister = async (req, reply, next) => {
    try {
        await User.findOne({ email: req.body.email }, (err, doc)=>{
            if(!err){
                throw boom.boomify("email already exist")
            } else{
                next()
            }
        })
        
    } catch (err) {
      throw boom.boomify(err)
    }
  }