const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
  linkedin: {
      URL: String, 
      display: Boolean
  },
  instagram: {
      URL: String,
      display: Boolean
  },
  facebook: {
      URL: String, 
      display: Boolean
  },
  phoneNumber: {
      number: Number,
      display: Boolean
  }
});

// compile model from schema
// module.exports = mongoose.model("social", SocialSchema);

module.exports = SocialMedia = mongoose.model('social', SocialMediaSchema);
