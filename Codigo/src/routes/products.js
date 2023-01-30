const express = require("express");
const router = express.Router();
const pcControllers = require("../controllers/productsControllers");

router.get("/productcreation", pcControllers.create);
router.get("/productedit", pcControllers.edit);
router.get('/productDetail',pcControllers.detail)
router.get('/shoppingCart', pcControllers.cart);

module.exports = router;
