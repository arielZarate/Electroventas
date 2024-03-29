//CRUD API MASCOTAS

const Product = require("../models/product");
const Images = require("../models/Images");
const { Op } = require("sequelize");
const Category = require("../models/category");

//inporto cloudinary
const uploadCloudinary = require("../middlewares/cloudinary.js");
const { deleteImageAfterUpload } = require("../middlewares/multer_config.js");

const createProduct = async (req, res, next) => {
  try {
    let {
      name,
      //  image,
      brand,
      model,
      description,
      price,
      rating,
      categoryId,
    } = req.body;

    let file = req.file;

    let upload = await uploadCloudinary(file);
    //console.log(upload.secure_url);

    let newProduct = await Product.create({
      name,
      brand,
      model,
      description,
      price,
      rating,
      categoryId: parseInt(categoryId),
    });

    const productId = newProduct.id;
    //console.log(productId);

    // Crear la imagen
    let newImage = await Images.create({
      url: upload.secure_url, // URL de la imagen que recibes en el body de la solicitud
      principal: true,
      productId, // Asocia la imagen con el producto mediante su ID
    });
    // Eliminar la imagen del servidor local después de subirla y asociarla al producto
    await deleteImageAfterUpload(req, res, () => {});

    const responseObj = {
      product: newProduct,
      image: newImage,
    };

    //console.log(responseObj);
    responseObj
      ? res.json(responseObj)
      : res.status(404).json({ message: error.message });

    // console.log(responseObj);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//=========================
/* 
       //opciones 
      {
        include: [
          {
            model: Vaccines,
            attributes: ["id", "name"],
            through: { attributes: [] },
          }
        ],
      } */

/* include: [
          {
            model: Vaccines,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        
        ], */

const getProduct = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name req.query
    if (!name) {
      // const products = await Product.findAll();
      const products = await Product.findAll({
        attributes: [
          "id",
          "name",
          "brand",
          "model",
          "description",
          "price",
          "rating",
        ],
        include: [
          {
            model: Images,
            attributes: ["id", "url"], // Atributos específicos de Images que deseas traer
          },
          {
            model: Category,
            attributes: ["id", "names"], // Atributos específicos de Category que deseas traer
          },
        ],
      });

      //console.log("get back", products[0]);
      products
        ? res.json(products)
        : res.status(404).json({ message: "Product not Found 😕" });
    } else {
      const searchByName = await Product.findAll({
        where: {
          name: { [Op.substring]: `${name}` }, // [Op.iLike]: '%hat'
        },
        include: [
          {
            model: Images,
            attributes: ["id", "url"], // Atributos específicos de Images que deseas traer
          },
          {
            model: Category,
            attributes: ["id", "names"], // Atributos específicos de Category que deseas traer
          },
        ],
      });

      //opcion 2 otra forma de filtrar pero primero traigo todo de product
      /*    let searchByName = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      ); */
      searchByName.length
        ? res.status(200).json(searchByName)
        : res.status(404).json({
            message: "Producto  not Found by name",
          });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const productById = async (req, res) => {
  try {
    const { id } = req.params;
    const productById = await Product.findAll({
      where: { id: id },
      include: {
        model: Images,
        /*   as: "imagenes", */

        attributes: ["url"],
      },
    });

    //console.log(productById);
    productById
      ? res.json(productById)
      : res.status(400).json("There are no product with that id in the db");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      await Product.destroy({
        where: { id: id },
        // force: true, //el force true hace eliminar un elementoaun siendo paranoico
        //await post.restore(); //para restaurar archivo eliminados temporalmente
      });

      return res.json("Product Removed");
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("Undefined id 😬");
    } else {
      const productById = await Product.findByPk(id);
      if (!productById) {
        throw new Error("Product not found by Id");
      } else {
        let { name, image, make, model, description, price, rating } = req.body;
        // Busca la imagen asociada al producto por su productId
        const imageToUpdate = await Images.findOne({
          where: { productById },
        });

        if (
          !name ||
          !description ||
          !image ||
          !make ||
          !model ||
          !rating ||
          !price
        ) {
          throw new Error("undefined parameter, check 😬");
        } else {
          //actualizo con lo pasado en parametros
          if (name) productById.name = name;
          if (description) productById.description = description;
          if (imageToUpdate) imageToUpdate.url = image;
          if (make) productById.make = make;
          if (model) productById.model = model;
          if (rating) productById.rating = rating;
          if (price) productById.price = price;

          await productById.save();
          return res.json(productById);
        }
      }
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

// recibe por param el id del producto a restaurar modo paranoid
const restoreProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("id undefined");
    const restoreById = await Product.restore({
      where: {
        id: id,
      },
    });
    restoreById
      ? res.json(`Product with id ${restoreById} restored`)
      : res.status(400).json("could not restore value");
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  productById,
  deleteProduct,
  updateProduct,
  restoreProduct,
};
