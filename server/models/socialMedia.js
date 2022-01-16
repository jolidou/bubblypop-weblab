const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    content: String
});

module.exports = mongoose.model('social', SocialMediaSchema);
