const mongoose = require('mongoose')

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  chip1: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
})

// Create the User model
const User = mongoose.model('User', userSchema)

module.exports =  User 
