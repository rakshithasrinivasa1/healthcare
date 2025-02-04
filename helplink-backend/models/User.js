const mongoose = require('mongoose');

//create schema
const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },
    
  email: { 
    type: String, 
    required: true, 
    unique: true },

  password: { 
    type: String, 
    required: true },

  role: { 
    type: String, 
    enum: ['patient', 'responder'], 
    required: true },
}, {timestamps: true});


//create model
const User = mongoose.model('User', UserSchema);
module.exports = User;
