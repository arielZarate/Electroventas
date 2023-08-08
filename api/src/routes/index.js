const { Router } = require("express");
const router = Router();

const Product = require("./product-routes");
const User = require("./user-routes");
const Login = require("./login-routes");
const Images = require("./images-routes");
const Brand = require("./brand-routes");
const Category = require("./category-routes");
const PXB = require("./productsByBrand-routes");
const PXC = require("./productsByCategory-routes");

router.use("/products", Product);
router.use("/user", User);
router.use("/login", Login);
router.use("/images", Images);
router.use("/brand", Brand);
router.use("/category", Category);
//TODO: routes de  filtros por marca y categoria

router.use("/productsBycategory", PXC);
router.use("/productsBybrand", PXB);

module.exports = router;
