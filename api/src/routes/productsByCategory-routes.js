const express = require("express");
const router = express.Router();
const { getProductsByCategory } = require("../controllers/productXcategory");

router.get("/:id", getProductsByCategory); //trae todos

module.exports = router;
