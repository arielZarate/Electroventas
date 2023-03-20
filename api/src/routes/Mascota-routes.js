const express = require("express");
const router = express.Router();
const {

} = require("../controllers/Mascota-controller");


router.get("/:id"); //trae por id
router.get("/:name"); //trae por query o sea el name
router.get("/"); //trae todos
router.post("/"); //crea un videogame

//agregados
router.put("/:id"); //actualiza un videogame
router.delete("/:id"); //elimina un videogame

module.exports = router;
