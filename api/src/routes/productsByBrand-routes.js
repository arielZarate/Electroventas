const express = require("express");
const router = express.Router();
const { getProductsByBrand } = require("../controllers/productXbrand");

router.get("/:brand", getProductsByBrand); //trae todos

module.exports = router;
