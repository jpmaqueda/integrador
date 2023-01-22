const express=require('express');
const router=express.Router();
const pcControllers=require('../controllers/pcControllers');

router.get('/productcreation', pcControllers.index);

module.exports=router;