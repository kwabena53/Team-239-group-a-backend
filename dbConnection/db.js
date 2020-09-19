// Require external modules
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI
// Connect to DB
const conn = mongoose.connect(MONGO_URI)
 .then(() => console.log("db connected" ))
 .catch(err => console.log(err))


 exports.connection = conn;