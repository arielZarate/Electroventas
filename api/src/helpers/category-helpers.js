const { data } = require("../utils/category.json");
const Category = require("../models/category");

//el helper es un controlador mas que ejecuta una vez y esta seteado no debe hacer nada mas que cargar lo que le instancio en el json
//llama al json que esta definido en el json de la carpeta Utils
const setCategories = () => {
  try {
    data.forEach(async (c) => {
      await Category.findOrCreate({
        where: {
          id: c.id,
          name: c.name,
        },
      });
    });
  } catch (error) {
    return error;
  }
};

module.exports = { setCategories };
