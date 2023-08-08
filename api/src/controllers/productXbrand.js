const Product = require("../models/product");
const Images = require("../models/Images");

async function getProductsByBrand(req, res) {
  const { brand } = req.params;
  try {
    const productsByBrand = await Product.findAll({
      where: {
        brand: brand,
      },

      include: {
        model: Images,
        attributes: ["id", "url"],
      },
    });

    productsByBrand.length > 0
      ? res.json(productsByBrand) //JSON.stringify(productsByCategory)
      : res.json(productsByBrand);
  } catch (error) {
    console.error("Error in products by Brand : ", error.message);
    // res.status(500).json({ message: "Hubo un error en el servidor" });
    throw error;
  }
}

module.exports = { getProductsByBrand };
