const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  url: { type: String, required: true },
  thumb_url: { type: String, required: true },
  deleteUrl: { type: String, required: true },
});

module.exports = mongoose.model("Image", imageSchema);
