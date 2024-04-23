const mongoose = require('mongoose')

// Define the schema for a user
const userSchema = new mongoose.Schema({
  data: {
    type: Array,
    required: true,
  },

})

// Create the User model
const Graph = mongoose.model('Graph', userSchema)

module.exports =  Graph 
