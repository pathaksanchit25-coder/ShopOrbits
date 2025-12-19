const productModel = require('../models/Products.model');

const getAllProductInfo = async (req, res) => {
    try {
        // Extract pagination & sorting params
        const { page = 1, limit = 10, sortBy = "createdAt", order = "desc" } = req.query;

        const pageNum = Number(page);
        const limitNum = Number(limit);

        // Fetch products with pagination & sorting
        const products = await productModel
            .find()
            .sort({ [sortBy]: order === "asc" ? 1 : -1 })
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum)
            .lean();

        // Count total products for pagination metadata
        const totalProducts = await productModel.countDocuments();

        res.status(200).json({
            success: true,
            count: products.length,
            total: totalProducts,
            page: pageNum,
            totalPages: Math.ceil(totalProducts / limitNum),
            products,
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

module.exports = getAllProductInfo;