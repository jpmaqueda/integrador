const express=require('express');
const router=express.Router();
const usersControllers=require('../controllers/UsersControllers');
const {body}=require('express-validator')
const validation=[
    body('nombre').notEmpty().withMessage('Escribe tu nombre y apellido.'),

    body('email').isEmail().withMessage('ingresa un Email válido.'),

    body('contrasena').notEmpty().withMessage('Al menos 8 caracteres.'),

    body('contrasena2').notEmpty().withMessage('Las contraseñas no son iguales.'),
];
//fileName = `${Date.now()}-img${path.extname(file.originalname)};`

router.get('/register', usersControllers.register);


router.post('/guardarUsuario', validation , usersControllers.guardarUsuario);

router.get('/cuentas',usersControllers.cuentas)

router.get('/login',usersControllers.login)

/* router.get('/profile/:userId',usersControllers.cuentaId) */


module.exports=router;