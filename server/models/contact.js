const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  user: String,
  type: String, 
  members: [String] // list of Google IDs of contacts of this type
});

// compile model from schema
module.exports = mongoose.model("contact", ContactSchema);
