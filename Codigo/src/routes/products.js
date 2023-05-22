const express = require("express");
const router = express.Router();
const pcControllers = require("../controllers/productsControllers");
const autMiddleware=require('../middlewares/autMiddleware')
const validator = require("../middlewares/validationProduct.js")
const adminMiddleware=require('../middlewares/adminMiddleware')
const upload=require('../middlewares/multerMiddlewares')


router.get('/productDetail/:id',pcControllers.detail)
router.get("/productcreation",adminMiddleware,pcControllers.store);
router.post("/productcreation", upload.single("imagen") ,validator ,pcControllers.create);
router.get("/productedit/:id",adminMiddleware, pcControllers.edit);
router.put('/productedit/:id', upload.single("imagen") ,validator,pcControllers.update)
router.get('/shoppingCart', autMiddleware, pcControllers.cart);
/* router.get('/shoppingCartAdd', pcControllers.cartAdd); */
router.get('/productsadmin',adminMiddleware, pcControllers.productadmin);
router.delete('/productsadmin/:id',pcControllers.delete)
module.exports = router;
