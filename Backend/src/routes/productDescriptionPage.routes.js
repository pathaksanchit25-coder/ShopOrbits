const express = require('express');
const router = express.Router();
const productDescriptionController = require('../controller/productDescriptionPage.controller');


router.get('/product/description/:id',productDescriptionController);


module.exports = router;