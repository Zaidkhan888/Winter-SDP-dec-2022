const mongoose = require('mongoose');
// const { Schema } = mongoose;

const todoSchema = new mongoose.Schema({
  title:  String,
  completed: String
  
  }
)