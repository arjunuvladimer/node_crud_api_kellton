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
    // Two Parameters
    // 1. Object/Document that you need to store inside the collection
    // 2. Callback if it is successful we are going to get a response from database
    // any error we are going to display the error

    UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone
    },)
})