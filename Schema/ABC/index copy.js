const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserModel = require ('./models/Users')

const app = express()
const PORT = 3008

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb+srv://UserAeri:GdgnafdurZLhEkw6@cluster0.qiookc8.mongodb.net/')

// Create a mongoose model
const YourModel = mongoose.model('YourModel', {
  // Define your schema here
  // Example:
  name: String,
  age: Number,
})

// Express endpoint to get data
app.get('/getUsers', async (req, res) => {
  try {
    const data = await UserModel.find()

    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server SSSError' })
  }
})

// Express endpoint to post data
app.post('/api/data', async (req, res) => {
  try {
    const newData = new YourModel(req.body)

    await newData.save()
    res.json(newData)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port my bwoi ${PORT}`)
})
