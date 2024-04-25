// server/models/answers.js

const mongoose = require("mongoose");

// Define a Mongoose schema
const answersSchema = new mongoose.Schema({
  question1: String,
  question2: String,
  question3: String,
});

// Create a Mongoose model
const AnswersModel = mongoose.model("Answers", answersSchema);

module.exports = AnswersModel;
