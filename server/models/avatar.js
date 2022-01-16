const mongoose = require("mongoose");

const BubbleSchema = new mongoose.Schema({
  googleid: String,
  avatarURL: String
});

// compile model from schema
module.exports = mongoose.model("avatar", AvatarSchema);
