const {body} = require('express-validator')

const validator=[
    // Validacion para los productos
    body("nombre")
    .notEmpty().withMessage("Agregar un nombre").bail()
    .isLength({min: 5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body("precio")
    .notEmpty().withMessage("Campo obligatorio"),
    /* body("color")
    .notEmpty().withMessage("Campo obligatorio"),
    body("alto")
    .notEmpty().withMessage("Campo obligatorio"),
    body("largo")
    .notEmpty().withMessage("Campo obligatorio"),
    body("ancho")
    .notEmpty().withMessage("Campo obligatorio"),
    body("categoryId")
    .notEmpty().withMessage("Campo obligatorio"),
    body("materialId")
    .notEmpty().withMessage("Campo obligatorio"), */
    body("descripcion")
    .notEmpty().withMessage("Agregar una descripción").bail()
    .isLength({min: 20}).withMessage("La descripción debe tener al menos 20 caracteres"),
    body("imagen")
    .notEmpty().withMessage("Agrege una imagen").bail()
    ,
]
module.exports=validator;