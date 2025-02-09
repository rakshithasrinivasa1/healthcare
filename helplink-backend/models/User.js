const mongoose = require('mongoose');

//create schema
const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },

    dob: {
      type: String,
      required: true
    },

    gender: {
      type: String,
      required: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    emergencyContact: {
      type: String,
      required: true
    },
    
  email: { 
    type: String, 
    required: true, 
    unique: true },

  password: { 
    type: String, 
    required: true },

    address: {
      type: String,
      required: true
    },

    bloodGroup: {
      type: String,
      required: true
    },

    existingConditions: {
      type: String,
      required: true
    },

    currentConditions: {
      type: String,
      required: true
    },

  role: { 
    type: String, 
    enum: ['patient', 'responder'], 
    required: true },
});


//create model
const User = mongoose.model('User', UserSchema);
module.exports = User;
