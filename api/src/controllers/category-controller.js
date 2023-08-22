const Category = require("../models/category");
const Product = require("../models/product");

const createCategories = async (req, res) => {
  try {
    let { names } = req.body;

    //console.log(names);

    if (!Array.isArray(names)) {
      // Si no es un array, lo convertimos en un array con un solo elemento
      names = [names];
    }

    /*    names.map((n) => {
      console.log(n);
    }); */

    const newCategory = await Category.bulkCreate(
      names.map((item) => ({ names: item.toUpperCase() })) //el toUpperCase es para que se convierta en mayuscula siempre
    );

    if (newCategory.length > 0) {
      return res.status(200).send(newCategory);
    } else {
      return res
        .status(404)
        .json({ message: "No se pudo crear ninguna Categoria." });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

/* const getProductsByCategory = async (productId) => {
  try {
    const category = await Category.findOne({ where: { id: productId } });
    if (!category) {
      // La categoría no existe
      return [];
    }

    const products = await Product.findAll({
      where: { categoryId: category.id },
    });

    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}; */

const getCategories = async (req, res) => {
  try {
    let categoryFind = [];
    categoryFind = await Category.findAll({
      /* include: {
        model: Product,
        attributes: ["id", "name", "brand", "model"],
      }, */
    });

    categoryFind.length > 0
      ? res.status(200).json(categoryFind)
      : res.status(400).json("No hay categorias");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createCategories, getCategories };
