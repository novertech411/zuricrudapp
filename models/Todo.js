const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: { type: String },
  time: { type: String }, 
  description: { type: String }, 
  date: { type: String },
});
module.exports = Flight = mongoose.model("todo", todoSchema);
