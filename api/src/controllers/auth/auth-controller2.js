
const  User = require("../../models/users/user");
const  Roles = require("../../models/users/roles");

const bcrypt = require("bcrypt");
const {generateJWT}=require('./generateJWT');
const { verifyJWT } = require("./authJWT");

const { update_date_for_login } = require('./auth_update');
//necsito una funcion para controlar el tiempo de expiracion, puedo usar cualquiera
const {generateTimeExpirationInSeconds}=require('./generate_time_expiration_token');


const auth= async(req, res)=> { 
try {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).send({
      error:
        "No se proporcionó un token o el token es nulo. Debe iniciar sesión para acceder a esta página.",
    });
  }

  const decoded = verifyJWT(token);
  if (!decoded) {
    return res.status(401).send({
      error:
        "El token proporcionado no es válido o está mal formateado. Debe iniciar sesión para acceder a esta página.",
    });
  }

  const user = await User.findOne({
    where: { id: decoded.id.id},
    include: {
      model: Roles,
      attributes: ["role"],
    },
  });

  if (!user) {
    return res.status(401).send({
      error:
        "No se encontró ningún usuario con el token proporcionado. Debe iniciar sesión para acceder a esta página.",
    });
  }

  const tokenExpirationDate = user.token_expiration_date;
  const currentTime = Date.now();

  if (!tokenExpirationDate || tokenExpirationDate < currentTime) {
    return res.status(401).send({
      error:
        "El token proporcionado ha caducado o es inválido. Debe iniciar sesión para acceder a esta página.",
    });
  }

  const { email, role } = user;
  const { username } = user.dataValues.Role;

  const newTokenExpirationDate = generateTimeExpirationInSeconds();
  const newToken = await generateJWT({ id: user.id, email, role });

  await update_date_for_login({ id: user.id, expirationDate: newTokenExpirationDate });

  return res.json({
    message: "Inicio de sesión exitoso",
    obj: { role, username, email },
    token: newToken,
  });

/* 

  if (user_logged.token_expiration_date && user_logged.token_expiration_date > Date.now()) {
  const decodedToken = verifyJWT(token);
  const { role, username, email } = user_logged;
  return res.json({ message: "successful login", obj: { role, username, email }, token }); 
}

*/


  // El token está vigente, verificar si es válido
  
    const authHeader = req.headers.authorization.split(' ')[1];  //ignora el Bearer

    if (authHeader) {
   // console.log( "token recuperado\n" , authHeader);

      const token = authHeader;
      const decoded = verifyJWT(token);

      if (decoded && decoded.id.id === user_logged.id) //verifica si es el mismo user
      {
        console.log("successful login")
        const {username, email } = user_logged;
        let role= user_logged.dataValues.Role.dataValues.role;
      
       //console.log(username,email,role);
        return res.json({ message: "successful login",role,username,email, token });
     }
    }
    else{
          // El token no es válido
      return res.status(401).json({ error: error.message });

    }  









} catch (error) {
  return res.status(500).json({ error: error.message });
}

}

module.exports = { auth };
