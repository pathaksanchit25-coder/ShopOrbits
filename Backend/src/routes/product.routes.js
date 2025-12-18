const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/middleware')

router.post('/product/add',authMiddleware(['admin']),productController.addProduct);

module.exports = router