const express = require('express');
const router = express.Router();
const getAdminInfoController = require('../controller/getAdminInfo.controller');
const getUserInfoController = require('../controller/getUserInfo.controller');

router.get('/admin/:id',getAdminInfoController);
router.get('/user/:id',getUserInfoController);


module.exports = router;