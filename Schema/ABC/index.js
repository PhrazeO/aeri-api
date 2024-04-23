const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require ('./models/Users')
const Graph = require ('./models/Graph')
const Country = require ('./models/Country')


const app = express()
const PORT = 3001

app.use(cors())

// Connect to MongoDB
mongoose.connect("mongodb+srv://UserAeri:GdgnafdurZLhEkw6@cluster0.qiookc8.mongodb.net/DBA?retryWrites=true&w=majority")


// Inside your server route or handler for '/getUsers'
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



app.get('/getGraph', async (req, res) => {
  try {
    const graph = await Graph.find()// Assuming 'Graph' is your MongoDB model

    console.log('Fetched Things:', graph) // Log the actual data (not the model)
    res.json(graph)
  } catch (error) {
    console.error('Error fetching graph data:', error)
    res.status(500).json({ error: error.message || 'Internal Server Error' })
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





app.post('/getUsers', async (req, res) => {
  res.json('Hello to my app')
})

app.post('/getGraph', async (req, res) => {
  res.json('Hello to my app')
})
app.post('/getCountry', async (req, res) => {
  res.json('Hello to my app')
})



app.listen(3001, () => {
  console.log(`Server RAER${PORT}`)
})
