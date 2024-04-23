const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require ('./models/Users')

const app = express()
const PORT = 3001

app.use(cors())

// Connect to MongoDB
mongoose.connect("mongodb+srv://UserAeri:GdgnafdurZLhEkw6@cluster0.qiookc8.mongodb.net/test?retryWrites=true&w=majority")


// Inside your server route or handler for '/getUsers'
app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find() // Assuming 'User' is your MongoDB model

    console.log('Fetched ulllopers:', users)
    res.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    res.status(500).json({ error: error.message || 'Internal Serversss Error' })
  }
})




app.listen(3001, () => {
  console.log(`Server RAR${PORT}`)
})
