const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
  user: String,
  content: String,
  type: String,
});

module.exports = mongoose.model("social", SocialMediaSchema);
