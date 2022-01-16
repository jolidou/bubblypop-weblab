const mongoose = require("mongoose");

const SocialMediaSchema = new mongoose.Schema({
    googleid: String,
    type: String,
    display: Boolean
});

module.exports = mongoose.model('social', SocialMediaSchema);
