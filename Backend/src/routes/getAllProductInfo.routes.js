const express = require('express');
const router = express.Router();
const getAllProductInfoController = require('../controller/getAllProductInfo.controller');


router.get('/product/allInfo',getAllProductInfoController);


module.exports = router