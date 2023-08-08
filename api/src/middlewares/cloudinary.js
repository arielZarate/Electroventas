const cloudinary = require("cloudinary");
//import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require("uuid");

//dkzyhurgc
//575523749393434
//D4FXzqEcF7DVBz2_OtOitCPJiDI
//CLOUDINARY_URL=cloudinary://575523749393434:D4FXzqEcF7DVBz2_OtOitCPJiDI@dkzyhurgc
// Configuration

cloudinary.v2.config({
  cloud_name: "dqunrpktq",
  api_key: "364634763792647",
  api_secret: "yDDZAh6jSDyL-yAqu_5RE7XaFXY",
});

//const uuid = uuidv4(); //uuid para manejar nombre de imageens aleatorios
//console.log(uuid);
//el filename tiene el uuid
//let filename = uuid; //la extension se la agrega solo cloudinary

let folderName = "electroventas";
let subfolder = "products";

async function uploadCloudinary(file) {
  const filename = uuidv4(); // Genera un nuevo UUID cada vez que se sube una imagen

  const publicId = folderName
    ? `${folderName}/${subfolder}/${filename}`
    : filename; // Si se especifica un nombre de carpeta, agrégalo al public_id
  let cloud = await cloudinary.uploader.upload(file.path, {
    public_id: publicId,
    //transformation maneja la imagen , tamaño calidad y recorte
    transformation: [
      { width: 500, height: 500, crop: "limit", quality: "auto" },
    ],
  });
  return cloud;
}

//export default uploadCloudinary;
module.exports = uploadCloudinary;
