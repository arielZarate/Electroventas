const cloudinary = require("cloudinary");
//import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require("uuid");

// Configuration

cloudinary.v2.config({
  cloud_name: "dkzyhurgc",
  api_key: "575523749393434",
  api_secret: "D4FXzqEcF7DVBz2_OtOitCPJiDI",
  secure: true,
});

const uuid = uuidv4(); //uuid para manejar nombre de imageens aleatorios
//console.log(uuid);
//el filename tiene el uuid
let filename = uuid; //la extension se la agrega solo cloudinary

async function uploadCloudinary(file) {
  let cloud = await cloudinary.uploader.upload(file.path, {
    //uploas seria la carpeta donde se guardara todo lo que subimos de products
    folder: "products",
    public_id: filename,
    //transformation maneja la imagen , tamaño calidad y recorte
    transformation: [
      { width: 500, height: 500, crop: "limit", quality: "auto" },
    ],
  });
  return cloud;
}

//export default uploadCloudinary;
module.exports = uploadCloudinary;
