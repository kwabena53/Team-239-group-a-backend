const mongoose = require('mongoose');

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };

var userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: 'First name is required'
    },
    lastName:{
        type: String,
        required: 'Last name is required'
    },
    phone: {
        type: String,
        required: 'Phone number is required'
    },
    location: {
        type: String,
    },
    email: {
        type: String,
        required: 'Email name is required'
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    status: {
        type: String
    },
}, schemaOptions);

userSchema.path('email').validate((val) => { 
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val);
}, 'invalid email') ;

userSchema.path('phone').validate((val) => { 
    return val.match(/\d/g).length===10;
}, 'invalid phone number');

module.exports = mongoose.model('User', userSchema);
