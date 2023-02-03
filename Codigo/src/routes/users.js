const express=require('express');
const router=express.Router();
const usersControllers=require('../controllers/UsersControllers');
const { body }=require('express-validator')

const validation=[
    body('nombre').notEmpty().withMessage('Escribe tu nombre y apellido.'),

    body('email')
    .notEmpty().withMessage('Ingresa un Email.').bail()
    .isEmail().withMessage('ingresa un Email válido.'),

    body('contrasena')
    .notEmpty().withMessage('Al menos 8 caracteres y una mayúscula.').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
    .custom((value) => {
        if (!/[A-Z]/.test(value)) {
          throw new Error('La contraseña debe tener al menos una letra mayúscula');
        }
        return true;
      }),
    
    body('contrasena2').notEmpty().withMessage('Las contraseñas no son iguales.'), 
];
//fileName = `${Date.now()}-img${path.extname(file.originalname)};`

router.get('/register', usersControllers.register);


router.post('/register', validation , usersControllers.guardarUsuario);

router.get('/cuentas',usersControllers.cuentas)

router.get('/login',usersControllers.login)

/* router.get('/profile/:userId',usersControllers.cuentaId) */


module.exports=router;