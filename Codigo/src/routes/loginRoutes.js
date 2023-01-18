const express=require('express');
const router= express.Router();
const loginControllers=require('../controllers/loginControllers');

router.get('/login',loginControllers.login)

module.exports=router;