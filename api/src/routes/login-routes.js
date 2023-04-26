

const { Router } = require("express");
const router = Router();
const { auth } = require("../controllers/auth/auth-controller");

router.post("/",auth);

module.exports = router;
