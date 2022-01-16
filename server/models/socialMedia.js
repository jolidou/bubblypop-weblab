const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    googleid: String,
    type: String,
    display: Boolean
});

// compile model from schema
// module.exports = mongoose.model("social", SocialSchema);

module.exports = SocialMedia = mongoose.model('social', SocialMediaSchema);
