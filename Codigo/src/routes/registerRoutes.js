const express=require('express');
const router=express.Router();
const registerControllers=require('../controllers/registerControllers');

router.get('/register', registerControllers.register);

module.exports=router;