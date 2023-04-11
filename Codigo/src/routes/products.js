const express = require("express");
const router = express.Router();
const pcControllers = require("../controllers/productsControllers");
const validator = require("../middlewares/validationProduct.js")
const upload=require('../middlewares/multerMiddlewares')


router.get('/productDetail/:id?',pcControllers.detail)
router.get("/productcreation",pcControllers.store);
router.post("/store", validator, upload.single("imagen") ,pcControllers.create);
router.get("/productedit/:id", pcControllers.edit);
router.put('/productedit/:id',validator,upload.single("imagen"),pcControllers.update)
router.get('/shoppingCart', pcControllers.cart);
/* router.get('/shoppingCartAdd', pcControllers.cartAdd); */
router.get('/productsadmin', pcControllers.productadmin);
router.delete('/productsadmin/:id',pcControllers.delete)
module.exports = router;
