const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    content: String
});

// compile model from schema
// module.exports = mongoose.model("social", SocialSchema);

module.exports = SocialMedia = mongoose.model('social', SocialMediaSchema);
