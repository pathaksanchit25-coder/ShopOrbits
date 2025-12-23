const express = require('express');
const router = express.Router();
const wishlistProductController = require('../controller/wishListProduct.controller');
const authMiddleWare = require('../middleware/middleware');

router.post('/product/wishlist/add', authMiddleWare(), wishlistProductController.addToWishlist);
router.delete('/product/wishlist/delete', authMiddleWare(), wishlistProductController.removeFromWishlist);
router.get('/product/wishlist/get', authMiddleWare(), wishlistProductController.getWishlist);


module.exports = router;