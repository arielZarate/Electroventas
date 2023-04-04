const { Router } = require("express");
const router = Router();

const Product = require("./product-routes");
const User = require("./user-routes");
const Login = require("./login-routes");

router.use("/products", Product);
router.use("/user", User);
router.use("/login", Login);

module.exports = router;
