const { Router } = require("express");
const router = Router();
const { getBrand, createBrand } = require("../controllers/brand-controller");

router.post("/", createBrand);
router.get("/", getBrand);

module.exports = router;
