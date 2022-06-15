// Express js for Routing
const express = require('express')

// Require User Model from Model
const UserModel = require('../model/users.model')

const router = express.router()

// CRUD => Create, Read, Update, Delete

// 1. Create
// Two Parameters 
// 1. Route
// 2. Callback function where in you are going to send the data to database
// Request client for data
// Response to get it from Database
router.post('/create', (req,res) => {

})