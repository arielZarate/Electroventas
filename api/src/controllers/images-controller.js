const Images = require("../models/Images");

const createImage = async (req, res) => {
  try {
    const { url, principal, productId } = req.body;

    console.log(url, principal, productId);

    const newImage = await Images.create({
      url,
      principal,
      productId: parseInt(productId),
    });

    // console.log(newImage);
    newImage
      ? res.status(200).json(newImage)
      : res.status(400).json("Error producto no creado");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getImages = async (req, res) => {
  try {
    const response = await Images.findAll();

    console.log(response);
    response
      ? res.json(response[0])
      : res.status(400).json("Error no se encontraron images");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createImage, getImages };
