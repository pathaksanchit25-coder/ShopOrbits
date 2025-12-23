const Wishlist = require('../models/wishlist.model'); // adjust path if needed

// Add product to wishlist
const addToWishlist = async (req, res) => {
    try {
        const userId = req.user.id; // assuming you have auth middleware
        const { productId } = req.params;

        const wishlist = await Wishlist.findOneAndUpdate(
            { userId },
            { $addToSet: { products: productId } }, // $addToSet prevents duplicates
            { new: true, upsert: true }
        ).populate("products");

        res.status(200).json({ success: true, wishlist });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to add product", error: err.message });
    }
};

// Remove product from wishlist
const removeFromWishlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.params;

        const wishlist = await Wishlist.findOneAndUpdate(
            { userId },
            { $pull: { products: productId } },
            { new: true }
        ).populate("products");

        res.status(200).json({ success: true, wishlist });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to remove product", error: err.message });
    }
};

// Fetch all products in wishlist
const getWishlist = async (req, res) => {
    try {
        const userId = req.user.
        
        id;

        const wishlist = await Wishlist.findOne({ userId }).populate("products");

        res.status(200).json({ success: true, wishlist: wishlist || { products: [] } });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to fetch wishlist", error: err.message });
    }
};


module.exports = { addToWishlist, removeFromWishlist, getWishlist };