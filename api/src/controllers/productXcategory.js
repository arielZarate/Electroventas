const Product = require("../models/product");
const Images = require("../models/Images");
//TODO: productByCategory
// Función para obtener productos por categoría

//let categoriaId = 1;

async function getProductsByCategory(req, res) {
  const { id } = req.params;
  //console.log("el id ingresado ", id);
  try {
    const productsByCategory = await Product.findAll({
      where: {
        categoryId: id,
      },

      include: {
        model: Images,
        attributes: ["id", "url"],
      },
    });

    productsByCategory.length > 0
      ? res.json(productsByCategory) //JSON.stringify(productsByCategory)
      : res.json(productsByCategory);
  } catch (error) {
    console.error("Error in products by Category : ", error.message);
    throw error;
  }
}

module.exports = { getProductsByCategory };
