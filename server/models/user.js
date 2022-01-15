const mongoose = require("mongoose");
// const Social = require('./Social');
import SocialMedia from './socialMedia.js'

const UserSchema = new mongoose.Schema({
  googleid: String,
  name: String,
  counter: Number,
  avatarURL: String, 
  status: String,
  socialMedia: {type: Schema.Types.ObjectId, ref: 'SocialMedia'},
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);