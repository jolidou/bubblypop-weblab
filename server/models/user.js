const mongoose = require("mongoose");
// const Social = require('./Social');

const UserSchema = new mongoose.Schema({
  googleid: String,
  name: String
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);