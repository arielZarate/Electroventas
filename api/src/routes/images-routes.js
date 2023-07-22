const express = require("express");
const router = express.Router();
const { createImage, getImages } = require("../controllers/images-controller");

//router.get("/:id", productById); //trae por id
//(router.get("/:name", getProduct); //trae por query o sea el name
router.get("/", getImages); //trae todos
router.post("/", createImage); //crea

//agregados
//router.put("/restore/:id", restoreProduct); //actualiza
//router.put("/:id", updateProduct); //actualiza
//router.delete("/:id", deleteProduct); //elimina

module.exports = router;
