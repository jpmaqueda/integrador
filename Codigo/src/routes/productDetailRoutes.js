const express=require('express');
const router= express.Router();
const productDetailControllers=require('../controllers/productDetailControllers');

router.get('/productDetail',productDetailControllers.detail)

module.exports=router;