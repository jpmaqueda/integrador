const express = require("express");
const router = express.Router();
const pcControllers = require("../controllers/productsControllers");

const upload=require('../middlewares/multerMiddlewares')


router.get("/productcreation",pcControllers.create);
router.post("/store", upload.single("img") ,pcControllers.store);
router.get("/productedit/:id", pcControllers.edit);
router.put('/productedit/:id',upload.single("img"),pcControllers.update)
router.get('/productDetail/:id?',pcControllers.detail)
router.get('/shoppingCart', pcControllers.cart);
router.get('/productsadmin', pcControllers.productadmin);
router.delete('/productsadmin',pcControllers.delete)
module.exports = router;
