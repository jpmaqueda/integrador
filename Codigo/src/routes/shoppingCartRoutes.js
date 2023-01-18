const express=require('express');
const router=express.Router();
const shoppingCartControllers=require('../controllers/shoppingCartControllers');

router.get('/shoppingCart', shoppingCartControllers.cart);

module.exports=router;