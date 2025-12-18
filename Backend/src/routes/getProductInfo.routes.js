const express = require('express');
const router = express.Router();
const productInfoController = require('../controller/getProductInfo.controller');
const authMiddleware = require('../middleware/middleware')

router.get('/product/info', authMiddleware(['admin']), productInfoController);


module.exports = router;