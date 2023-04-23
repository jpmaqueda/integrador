const {body} = require('express-validator')

const validator=[
    // Validacion para los productos
    body('nombre')
    .notEmpty().withMessage("Agregar un nombre").bail()
    .isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres"),

    body('precio')
    .notEmpty().withMessage("Agregar precio del producto"),

    body('descripcion')
    .notEmpty().withMessage("Agregar una descripción").bail()
    .isLength({min: 20}).withMessage("La descripción debe tener al menos 20 caracteres"),
    
    body('materialId').notEmpty().withMessage("Elegir un material"),

    body('categoryId').notEmpty().withMessage("Elegir una categoria"),
]
module.exports=validator;