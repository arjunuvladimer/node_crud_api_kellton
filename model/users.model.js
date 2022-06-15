// Creating Schema
// Import Mongoose Library
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

// Model is trying to create a schema based on the options we represented 
// using mongoose.Schema 
module.exports = mongoose.model('user',UserSchema)