const productModel = require('../models/Products.model');

const getProductInfo = async (req, res) => {
  try {
    // Fetch products owned by the logged-in admin
    const productInfo = await productModel
      .find({ ownerId: req.user.id })
      .populate("ownerId", "username email"); // 👈 optional: include admin details

    if (!productInfo || productInfo.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found for this admin",
      });
    }

    res.status(200).json({
      success: true,
      products: productInfo,
    });
  } catch (err) {
    console.error("Error fetching product info:", err.message);
    res.status(500).json({
      success: false,
      message: "Error fetching product info",
      error: err.message,
    });
  }
};

module.exports =  getProductInfo ;