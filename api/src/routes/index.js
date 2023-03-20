const { Router } = require("express");
const router = Router();

const Mascota = require("./Mascota-routes");

router.use("/Mascotas", Mascota);

module.exports = router;
