const productModel = require('../models/Products.model');

const addProduct = async (req, res) => {
  try {
    const { name, image, description, rating, category, price } = req.body;

    // 👇 Get admin ID from JWT payload (set in authMiddleware)
    const adminId = req.user.id;

    // Create new product tied to admin
    const newProduct = await productModel.create({
      name,
      image,
      description,
      rating,
      category,
      price,
      ownerId: adminId   // 👈 reference to Admin model
    });

    res.status(201).json({
      message: 'Product added successfully',
      newProduct,
    });
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({
      message: 'Error adding product',
      error: err.message,
    });
  }
};

module.exports = { addProduct };