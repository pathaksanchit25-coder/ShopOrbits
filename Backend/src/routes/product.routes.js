const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.post('/product/add',productController.addProduct);

module.exports = router