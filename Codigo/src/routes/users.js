const express=require('express');
const router=express.Router();
const usersControllers=require('../controllers/UsersControllers');
const guestMiddleware=require('../middlewares/guestMiddleware')
const autMiddleware=require('../middlewares/autMiddleware')
const adminMiddleware=require('../middlewares/adminMiddleware')
const validation=require('../middlewares/validationMiddlewares')
//fileName = `${Date.now()}-img${path.extname(file.originalname)};`

router.get('/register',guestMiddleware, usersControllers.register);
router.post('/register', validation , usersControllers.guardarUsuario);

router.get('/cuentas', adminMiddleware, usersControllers.cuentas)
router.get("/cuentas/details/:id", adminMiddleware, usersControllers.cuentaDetail)
router.put("/cuentas/details/:id", usersControllers.cuentaEdit)

router.get('/login',guestMiddleware,usersControllers.login)
router.post('/login',usersControllers.loginProcess)

router.get('/profile',autMiddleware,usersControllers.profile)
router.put('/profile/:id',usersControllers.profileEdit)
router.delete('/profile/:id',usersControllers.delete)
router.get('/logout',usersControllers.logout)

/* router.get('/profile/:userId',usersControllers.cuentaId) */


module.exports=router;