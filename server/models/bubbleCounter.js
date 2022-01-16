const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  googleid: String, 
  count: Number
});

// compile model from schema
module.exports = mongoose.model("bubbleCounter", BubbleCounterSchema);
