const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema({
  user: String,
  avatarURL: String,
});

// compile model from schema
module.exports = mongoose.model("avatar", AvatarSchema);
