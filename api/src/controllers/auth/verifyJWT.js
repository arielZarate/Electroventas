const jwt = require('jsonwebtoken');
/* const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

function verifyToken(req, res, next) {
  // Obtener el token del encabezado de autorización
  const token = req.headers.authorization.split(' ')[1];
  
  // Verificar si el token es válido
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    req.userData = decodedToken; // Agregar los datos del usuario decodificados a la solicitud
    next(); // Continuar con la siguiente función en la cadena de middleware
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = verifyToken; */


const verifyJWT = (token, secretKey) => {
  try {
    jwt.verify(token, secretKey)
    return true
  } catch (error) {
    return false
  }
}


module.exports={verifyJWT}