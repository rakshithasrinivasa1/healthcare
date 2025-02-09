const express = require('express');
const User = require('../models/User'); // Correct import

const router = express.Router();

// Create operation
router.post("/signin", async (req, res) => {
    try {
        const userAdded = await User.create(req.body);
        res.status(201).json(userAdded);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).json({ message: "User already exists or invalid data" });

    }
    res.send("Api running");
});




//get all users
router.get("/users", async(req,res) => {

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
router.get("/users/:id", async(req,res) => {

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
router.delete("/users/:id", async(req,res) => {

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
router.patch("/users/:id", async(req,res) => {

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