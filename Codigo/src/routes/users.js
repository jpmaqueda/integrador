const express=require('express');
const router=express.Router();
const usersControllers=require('../controllers/UsersControllers');

const validation=require('../middlewares/validationMiddlewares')
//fileName = `${Date.now()}-img${path.extname(file.originalname)};`

router.get('/register', usersControllers.register);


router.post('/register', validation , usersControllers.guardarUsuario);

router.get('/cuentas',usersControllers.cuentas)

router.get('/login',usersControllers.login)

/* router.get('/profile/:userId',usersControllers.cuentaId) */


module.exports=router;