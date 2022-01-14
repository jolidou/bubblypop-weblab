const mongoose = require("mongoose");

const BubbleSchema = new mongoose.Schema({
  googleid: String,
  status: String, 
  display: Boolean
});

// compile model from schema
module.exports = mongoose.model("bubble", BubbleSchema);
