const { Router } = require("express");
const router = Router();
const {
  getCategories,
  createCategories,
} = require("../controllers/category-controller.js");

router.post("/", createCategories);
router.get("/", getCategories);

module.exports = router;
