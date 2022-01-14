const mongoose = require("mongoose");

const StatusSchema = new mongoose.Schema({
  googleid: String,
  name: String,
  content: String,
});

// compile model from schema
module.exports = mongoose.model("status", StatusSchema);