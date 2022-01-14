const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  counter: Number,
  avatarURL: String, 
  status: String
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
