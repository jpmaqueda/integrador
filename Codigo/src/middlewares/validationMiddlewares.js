const { body }=require('express-validator')

const validation=[
    //validacion para el login
    body('nombre').notEmpty().withMessage('Escribe tu nombre y apellido.'),

    body('email')
    .notEmpty().withMessage('Ingresa un Email').bail()
    .isEmail().withMessage('ingresa un Email válido'),

    body('contrasena')
    .notEmpty().withMessage('Al menos 8 caracteres y una mayúscula.').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
    .custom((value) => {
        if (!/[A-Z]/.test(value)) {
          throw new Error('La contraseña debe tener al menos una letra mayúscula');
        }
        return true;
      }),
    
    body('contrasena2').notEmpty().withMessage('Ingrese la contraseña nuevamente.'),      
     
];
module.exports=validation