// Require User Model from Model
const UserModel = require('../model/users.model')

// Create with body
const create = (req,res) => {
    // Two Parameters
    // 1. Object/Document that you need to store inside the collection
    // 2. Callback if it is successful we are going to get a response from database
    // any error we are going to display the error

    UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone
    },(err,result) =>{
        if(err){
            res.send({
                message: "Not able to create user",
                error: err 
            })
        }
        res.send({
            message:'Successfully created user',
            data:result
        })
    })
}

// Read without request
const read = (req,res) => {
    UserModel.find({},(err,result) => {
        if(err){
            res.send({
                message: "Not able to Read users",
                error: err 
            })
        }
        res.send({
            message:'Successfully read users',
            data:result
        })
    })
}

// Update By Params
const update = (req,res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, (err,result) => {
        if(err){
            res.send({
                message: "Not able to Update users",
                error: err 
            })
        }
        res.send({
            message:'Successfully Updated users',
            data:result
        })
    })
}

// Delete By Params
const deleteUser = (req,res) => {
    UserModel.deleteOne({_id:req.params.id}, (err,result) =>{
        if(err){
            res.send({
                message: "Not able to Delete user",
                error: err 
            })
        }
        res.send({
            message:'Successfully Delete user',
            data:result
        })
    })
}

module.exports = {create, read, update, deleteUser}