const productModel = require('../models/Products.model');

const addProduct = async (req, res) => {
  try {
    const { name, image, description, rating, category,price } = req.body;

    // Create new product
    const newProduct = await productModel.create({
      name,
      image,
      description,
      rating,
      category,
      price
    });

    res.status(201).json({
      message: 'Product added successfully',
      newProduct, // ✅ return the created product for confirmation
    });
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({
      message: 'Error adding product',
      error: err.message, // ✅ helpful for debugging
    });
  }
};

module.exports = {addProduct};