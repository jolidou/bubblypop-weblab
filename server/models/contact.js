const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  user: String,
  recipient: String
});

// compile model from schema
module.exports = mongoose.model("contact", ContactSchema);
