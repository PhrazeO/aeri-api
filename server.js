// Code for mongoose config in backend
// Filename - backend/index.js
const User = require ('./models/Users')
const Country = require ('./models/Country')
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 8080");
app.use(express.json());
app.use(cors());
const PORT = 8080

// To connect with your mongoDB database
const mongoose = require('mongoose');

async function connectToMongoDB() {
	try {
		await mongoose.connect('mongodb+srv://UserAeri:GdgnafdurZLhEkw6@cluster0.qiookc8.mongodb.net/DBA', {
		});
		console.log('Connected to yourDB-name database');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}

connectToMongoDB();



// Inside yeeour servsser route or handler for '/getUsers'
app.get('/getUsers', async (req, res) => {
    try {
      const users = await User.find()// Assuming 'User' is your MongoDB model
  
      console.log('Fetched THings:', users)
      res.json(users)
    } catch (error) {
      console.error('Error fetching users:', error)
      res.status(500).json({ error: error.message || 'Internal A Serversss Error' })
    }
  })

  app.get('/getCountry', async (req, res) => {
    try {
      const country = await Country.find()// Assuming 'Country' is your MongoDB model
  
      console.log('Fetched Things:', country) // Log the actual data (not the model)
      res.json(country)
    } catch (error) {
      console.error('Error fetching country data:', error)
      res.status(500).json({ error: error.message || 'Internal Server Error' })
    }
  })


User.createIndexes();





app.listen(8080, () => {
    console.log(`Server RUNNING YEAH${PORT}`)
});
