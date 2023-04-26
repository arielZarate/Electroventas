
 const jwt = require('jsonwebtoken');

 //ESTA ES UNA CLAVE MAESTRA
const { SECRET_KEY } = process.env;




const verifyJWT = (token) => {
 try {
 
  const decodedToken = jwt.verify(token,SECRET_KEY);
    //console.log(decodedToken);
    return decodedToken;
  }
 catch (error) {
  console.log({error:error.message});
}
  
};


function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
 
  try {
    const decoded = verifyJWT(token);
    req.user = decoded; // agregar información del usuario a la solicitud
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = { authMiddleware ,verifyJWT};











