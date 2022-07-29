const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  surface: { type: Number, required: true },
  rooms: { type: Number, required: true },
  images: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: true },
  ],
});

module.exports = mongoose.model("Product", productSchema);