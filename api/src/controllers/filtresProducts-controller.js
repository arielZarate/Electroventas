const Product = require("../models/product");
const Images = require("../models/Images");

/* 

FIXME: NO LO USE PORQUE ME GENERABA REQUEST INNECESARIOS AL BACK NO ES EFICIENTE


*/

//TODO: filter product by brand
async function getProductsByBrand(req, res) {
  //FIXME: CAMBIAR A QUERY
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

//TODO: productByCategory
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

// TODO:Controlador para obtener productos ordenados por precio
const getProductsByPrice = async (req, res) => {
  try {
    const { sortBy } = req.query;

    let order = [["price", "ASC"]]; // Ordenar por precio ascendente de forma predeterminada

    if (sortBy === "desc") {
      order = [["price", "DESC"]]; // Ordenar por precio descendente si se especifica en la query
    }

    const products = await Product.findAll({
      order,
      include: {
        model: Images,
        attributes: ["id", "url"],
      },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

module.exports = {
  getProductsByBrand,
  getProductsByCategory,
  getProductsByPrice,
};
