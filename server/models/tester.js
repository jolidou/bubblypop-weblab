const mongoose = require("mongoose");

const TesterSchema = new mongoose.Schema({
  user: String,
  content: String,
});

// compile model from schema
module.exports = mongoose.model("tester", TesterSchema);
