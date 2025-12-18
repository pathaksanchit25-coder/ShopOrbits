const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ownerId: {   // 👈 Reference to Admin
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",   // 👈 This points to your Admin model
    required: true,
  }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;