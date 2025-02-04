// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;


const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

//create operation
router.post("/register", async (req,res) => {
    const{ name, email, password, role} = req.body;

    const User = require("../models/User");

    try{
        const userAdded = await User.create({
            name:name,
            email:email,
            password:password,
            role:role
        });
        res.status(201).json(userAdded);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "User already exists"});
    }
   
} )

//get all users
router.get("/", async(req,res) => {

    try{
        const showAll = await User.find();
        res.status(200).json(showAll);
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
    res.send("Api running");
})

//get single user
router.get("/:id", async(req,res) => {

    const {id} = req.params;
    try{
        const singleUser = await User.findById({_id : id});
        res.status(200).json(singleUser);
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
    res.send("Api running");
})

//delete operation
router.delete("/:id", async(req,res) => {

    const {id} = req.params;
    try{
        const singleUser = await User.findByIdAndDelete({_id : id});
        res.status(200).json(singleUser);
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
    res.send("Api running");
})

//put/patch..
router.patch("/:id", async(req,res) => {

    const {id} = req.params;
    const {name, email, password, role} = req.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new:true
        });
        res.status(200).json(updateUser);
    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
    res.send("Api running");
})

module.exports = router;