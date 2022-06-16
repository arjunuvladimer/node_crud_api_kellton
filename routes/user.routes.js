// Express js for Routing
const express = require('express')

const controller = require('../controller/user.controller')

const router = express.Router()

// CRUD => Create, Read, Update, Delete

// 1. Create
// Two Parameters 
// 1. Route
// 2. Callback function where in you are going to send the data to database
// Request client for data
// Response to get it from Database
router.post('/create', controller.create)

// 2. Read 
router.get('/read', controller.read)

// 3. Update By Id
router.put('/update/:id', controller.update)

// 4. Delete By Id
router.delete('/delete/:id', controller.deleteUser)

module.exports = router

