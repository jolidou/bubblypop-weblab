const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    googleid: String,
    content: String,
    type: String,
});

module.exports = mongoose.model('social', SocialMediaSchema);
