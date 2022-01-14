const mongoose = require("mongoose");
// const Social = require('./Social');
import Social from './social.js'

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  counter: Number,
  avatarURL: String, 
  status: String,
  social: {type: Schema.Types.ObjectId, ref: 'Social'},
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);