// Require external modules
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI
// Connect to DB
const conn = mongoose.connect("mongodb+srv://kwabs:kad1234@cluster0.pykji.mongodb.net/shoku?retryWrites=true&w=majority")
 .then(() => console.log("db connected" ))
 .catch(err => console.log(err))


 exports.connection = conn;