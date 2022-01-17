const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    content: String,
    type: String,
});

module.exports = mongoose.model('social', SocialMediaSchema);
