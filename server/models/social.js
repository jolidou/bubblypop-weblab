const mongoose = require("mongoose");

const SocialSchema = new mongoose.Schema({
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

module.exports = Social = mongoose.model('social', SocialSchema);
