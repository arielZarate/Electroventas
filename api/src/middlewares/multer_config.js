//import multer from "multer";

const multer = require("multer");
//import fs from "fs";

const fs = require("fs");

let upload = null;
try {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  upload = multer({ storage: storage });
} catch (error) {
  console.log(error.message);
}

// Middleware para eliminar el archivo después de subirlo
async function deleteImageAfterUpload(req, res, next) {
  // `req.file.path` contiene la ruta del archivo recién subido
  const rutaArchivo = req.file.path;

  // Eliminar el archivo utilizando fs.unlink
  await fs.unlink(rutaArchivo, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Archivo eliminado: ${rutaArchivo}`);
    }
    // Continuar con el flujo normal del servidor
    next();
    // console.log("sigue el flujo");
  });
}

//export default upload;
module.exports = { deleteImageAfterUpload, upload };

/* por buffer */
/*  import multer  from 'multer';



const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


export default upload;
 */

//multer lo usamos para poder manejar mejor los datos de la imagen
/* pot Storage */
