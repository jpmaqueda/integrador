const express = require("express");
const router = express.Router();
const pcControllers = require("../controllers/productsControllers");
const path =  require("path")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/imagenes/productos"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  })
  const upload = multer({storage})


router.get("/productcreation",pcControllers.create);
router.post("/store", upload.single("img") ,pcControllers.store);
router.get("/productedit/:id", pcControllers.edit);
router.put('/productedit/:id',upload.single("img"),pcControllers.update)
router.get('/productDetail/:id?',pcControllers.detail)
router.get('/shoppingCart', pcControllers.cart);
router.get('/productsadmin', pcControllers.productadmin);

module.exports = router;
