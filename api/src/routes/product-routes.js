const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  productById,
  deleteProduct,
  updateProduct,
  restoreProduct,
} = require("../controllers/product-controller");

const { upload } = require("../middlewares/multer_config.js");

router.get("/:id", productById); //trae por id
//(router.get("/:name", getProduct); //trae por query o sea el name
router.get("/", getProduct); //trae todos
router.post("/", upload.single("image"), createProduct); //crea

//agregados
router.put("/restore/:id", restoreProduct); //actualiza
router.put("/:id", updateProduct); //actualiza
router.delete("/:id", deleteProduct); //elimina

module.exports = router;
