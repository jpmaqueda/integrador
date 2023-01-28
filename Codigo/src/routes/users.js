const express=require('express');
const router=express.Router();
const registerControllers=require('../controllers/registerControllers');



router.get('/register', registerControllers.register);
router.post('/guardarUsuario', registerControllers.guardarUsuario);

router.get('/login',registerControllers.login)



module.exports=router;