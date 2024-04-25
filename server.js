// Code for mongoose config in backend
// Filename - backend/index.js
const User = require('./models/Users');
const Country = require('./models/Country');
const Region = require('./models/Region');


// For backend and express
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
const PORT = 8080;

// To connect with your MongoDB database
async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://UserAeri:GdgnafdurZLhEkw6@cluster0.qiookc8.mongodb.net/DBA', {});
        console.log('Connected to yourDB-name database');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

// Inside your server route handler for saving answers

// Inside your server route or handler for '/getUsers'
app.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find(); // Assuming 'User' is your MongoDB model
        console.log('Fetched Things:', users);
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message || 'Internal A Serversss Error' });
    }
});

app.get('/getCountry', async (req, res) => {
    try {
        const country = await Country.find(); // Assuming 'Country' is your MongoDB model
        console.log('Fetched Things:', country); // Log the actual data (not the model)
        res.json(country);
    } catch (error) {
        console.error('Error fetching country data:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.get('/getRegion', async (req, res) => {
    try {
        const region = await Region.find(); // Assuming 'Region' is your MongoDB model
        console.log('Fetched Things:', region); // Log the actual data (not the model)
        res.json(region);
    } catch (error) {
        console.error('Error fetching region data:', error);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});






// Define a Mongoose schema
const answersSchema = new mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
});

// Create a Mongoose model
const AnswersModel = mongoose.model('Answers', answersSchema);

// Inside your server index.js or wherever you define your routes
app.post('/saveAnswers', async (req, res) => {
    try {
        // Extract answers from the request body
        const { question1, question2, question3 } = req.body;

        // Create a new document in the database
        const newAnswers = new AnswersModel({
            question1,
            question2,
            question3,
        });
        await newAnswers.save();

        res.status(201).json({ message: 'Answers saved successfully' });
    } catch (error) {
        console.error('Error saving answers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8080, () => {
    console.log(`Server RUNNING POST MALONE ${PORT}`);
});
