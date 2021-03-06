const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  user: String,
  name: String,
  content: String,
});

// compile model from schema
module.exports = mongoose.model("status", StatusSchema);
