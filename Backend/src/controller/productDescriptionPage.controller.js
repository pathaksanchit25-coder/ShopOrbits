const productModel = require('../models/Products.model');


const productDescription = async (req, res) => {

    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        res.json({ product });
    } catch (err) {
        res.status(500).json({ error: "Product not found" });
    }
};


module.exports = productDescription
