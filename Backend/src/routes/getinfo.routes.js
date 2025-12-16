const express = require('express');
const router = express.Router();
const getAdminInfoController = require('../controller/getAdminInfo.controller');

router.get('/admin/:id',getAdminInfoController);


module.exports = router;