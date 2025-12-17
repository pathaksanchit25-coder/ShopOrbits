const mongoose = require('mongoose');

const productModelSchema = new mongoose.Schema({
  name: {
    type: String,   // ✅ Use constructor, not string
    required: true,
  },
  image:{
    type:String,
    required:true
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,     // ✅ Optional: give default rating
  },
  category: {
    type: String,
    required: true,
  },
});

// ✅ Correct model creation
const productModel = mongoose.model('Product', productModelSchema);

module.exports = productModel;