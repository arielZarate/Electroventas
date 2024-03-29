const { Router } = require("express");
const router = Router();

const Product = require("./product-routes");
const User = require("./user-routes");
const Login = require("./login-routes");
const Images = require("./images-routes");
const Brand = require("./brand-routes");
const Category = require("./category-routes");

router.use("/products", Product);
router.use("/user", User);
router.use("/login", Login);
router.use("/images", Images);
router.use("/brand", Brand);
router.use("/category", Category);

module.exports = router;
