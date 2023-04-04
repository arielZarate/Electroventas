const jwt = require('jsonwebtoken')
const {SECRET_KEY}=process.env
const generateJWT =  (id, email) => {
  try {
    const payload = { id, email }
    const token =  jwt.sign(payload,SECRET_KEY, { expiresIn: '2h' })
    return token
  } catch (error) {
    console.log(error)
    throw new Error('JWT could not be generated')
  }
}


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


const verify = (token, secretKey) => {
  try {
    jwt.verify(token, secretKey)
    return true
  } catch (error) {
    return false
  }
}


module.exports = {
  generateJWT, verify
}
