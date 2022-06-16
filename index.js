// Internal Modules / Dependencies => Classes, Functions
// External or Third Party Modules/Dependencies => Classes, Functions

// Relative Paths => Short Path
// Absolute Paths => Long Path or Full Path
const express = require('express')

// Features
// 1. Express does the routing 
// 2. Intializes the server

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const router = require('./routes/user.routes')


//Initialized your express functional constructor to app
const app = express() // Functional Constructor

// JSON Method
app.use(bodyParser.json())

// Basic Operation CRUD => Create Read Update and Delete
// Get Method
// Two Parameters
// Parameter 1: Routing
// Parameter 2: Call Back with request and response 
app.get('/', (req,res) => {
    res.send("First API")
})

// Middlewares that you want to use in express
app.use('/user', router)

// Database Credentials
// Username
const username = "arjunuvlad"
const password = "arjun123"
const dbName = "Employee"

const MongoURL = `mongodb+srv://${username}:${password}@hitman24.ct1jy.mongodb.net/${dbName}?retryWrites=true&w=majority`

// Connecting to Database
// Two Parameters
// 1: Connection URL
// 2. Call Back Function that you are going to recive the response 
// from the database back
mongoose.connect(MongoURL)
.then(()=>{
    console.log("Successfully Connected to the Database")
}) 
.catch((err) => {
    console.log(err)
})



// Listening to the server
// First Parameter: PORT Number => to establish to connect to the server
// Call Back Function : Print a statement called Successfully Running on Port 3000
const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Successfully Running on Port ${PORT}`)
})
