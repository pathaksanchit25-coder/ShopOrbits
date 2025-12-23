const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
});


const wishListModel = mongoose.model('wishlistModel',wishlistSchema);

module.exports = wishListModel;