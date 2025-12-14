const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')


//Admin Authentication Routes

router.post('/admin/register',authController.adminRegister);
router.post('/admin/login',authController.adminLogin);
router.get('/admin/logout',authController.adminLogout);

//User Authentication Routes

router.post('/user/register',authController.userRegister);
router.post('/user/login',authController.userLogin);
router.get('/user/logout',authController.userLogout);



module.exports = router;