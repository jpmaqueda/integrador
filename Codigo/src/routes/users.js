const express=require('express');
const router=express.Router();
const usersControllers=require('../controllers/UsersControllers');
const guestMiddleware=require('../middlewares/guestMiddleware')
const autMiddleware=require('../middlewares/autMiddleware')
const validation=require('../middlewares/validationMiddlewares')
//fileName = `${Date.now()}-img${path.extname(file.originalname)};`

router.get('/register',guestMiddleware, usersControllers.register);
router.post('/register', validation , usersControllers.guardarUsuario);

router.get('/cuentas',usersControllers.cuentas)
router.get('/profile',autMiddleware,usersControllers.profile)
router.get('/logout',usersControllers.logout)

router.get('/login',guestMiddleware,usersControllers.login)
router.post('/login',usersControllers.loginProcess)

/* router.get('/profile/:userId',usersControllers.cuentaId) */


module.exports=router;