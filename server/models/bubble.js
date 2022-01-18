const mongoose = require("mongoose");

const BubbleSchema = new mongoose.Schema({
  user: String,
  status: String, 
  name: String,
  display: Boolean
});

// compile model from schema
module.exports = mongoose.model("bubble", BubbleSchema);
