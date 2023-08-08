const Brand = require("../models/brand");

const getBrand = async (req, res) => {
  try {
    const models = await Brand.findAll({
      order: [["id", "ASC"]], // Orden ascendente por el campo 'id'
    });

    models
      ? res.json(models)
      : res.status(404).json("Error para encontar modelos");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//este create crea una sola marca por vez o un array de marcas todas juntas
const createBrand = async (req, res) => {
  try {
    let { names } = req.body;

    if (!Array.isArray(names)) {
      // Si no es un array, lo convertimos en un array con un solo elemento
      let names = [names];
    }

    const newBrand = await Brand.bulkCreate(
      names.map((item) => ({ names: item.toUpperCase() })) //el toUpperCase es para que se convierta en mayuscula siempre
    );

    /*     const brand = await Brand.create({
      names,
    }); */

    //if (newModels.length > 0) {
    if (newBrand) {
      return res.status(200).send(newBrand);
    } else {
      return res
        .status(404)
        .json({ message: "No se pudo crear ninguna marca." });
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
module.exports = { getBrand, createBrand };
