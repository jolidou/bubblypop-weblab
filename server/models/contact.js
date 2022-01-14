const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  friend: [String], //weird
  romantic: [String], 
  professional: [String], 
  undecided: [String],
  googleid: String
});

// compile model from schema
module.exports = mongoose.model("contact", ContactSchema);
