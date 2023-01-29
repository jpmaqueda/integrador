const express = require("express");
const router = express.Router();
const peControllers = require("../controllers/peControllers");

router.get("/productedit", peControllers.index);
module.exports = router;
