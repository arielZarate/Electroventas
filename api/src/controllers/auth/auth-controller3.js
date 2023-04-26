

const  User = require("../../models/users/user");
const  Roles = require("../../models/users/roles");

const bcrypt = require("bcrypt");
const {generateJWT}=require('./generateJWT');
const { verifyJWT } = require("./authJWT");

const { update_date_for_login } = require('./auth_update');
//necsito una funcion para controlar el tiempo de expiracion, puedo usar cualquiera
const {generateTimeExpirationInSeconds}=require('./generate_time_expiration_token');




//aca 


const auth= async(req, res)=> {  
/*   try {
    // Verificar si el usuario ha iniciado sesión
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("Token no proporcionado. El usuario debe iniciar sesión");
      return res.status(401).send({
        error: "No se proporcionó un token. Debe iniciar sesión para acceder a esta página.",
      });
    }

    // Validar el token
    const decoded = verifyJWT(token);

    if (!decoded) {
      console.log("Token inválido. El usuario debe iniciar sesión para generar un nuevo token");
      return res.status(401).send({
        error: "Token inválido. Debe iniciar sesión para generar un nuevo token.",
      });
    }

    //==========================================================================
    let { email, password } = req.body;

    let user_logged = await User.findOne({
      where: { email },
      include: {
        model: Roles,
        attributes: ["role"],
      }
    });
    //email
    if (!user_logged){
      console.log("email is not registered")
      return res.status(400).json({ error:"email is not registered" });
    }

    //password
    let validPassword = await bcrypt.compare(password, user_logged.password);
    if (!validPassword) {
      console.log("password incorrect")
      return res.status(400).json({ error: "password incorrect" });
    }

    // Verificar si el token está vigente
    if (decoded.exp * 1000 < Date.now()) {
      console.log("Token expirado. El usuario debe iniciar sesión para generar un nuevo token");
      return res.status(401).send({
        error: "Token expirado. Debe iniciar sesión para generar un nuevo token.",
      });
    }

    // El token está vigente y es válido, devolver la respuesta
    console.log("successful login")
    const {username, email } = user_logged;
    let role= user_logged.dataValues.Role.dataValues.role;
    return res.json({ message: "successful login",role,username,email, token });
  } catch (error) {
    // manejar la excepción
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
} 


module.exports = { auth };
*/







/* 
const auth = async (req, res) => {
  try {
    // Verificar si el usuario ha iniciado sesión
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("Token no proporcionado. El usuario debe iniciar sesión");
      return res.status(401).send({
        error: "No se proporcionó un token. Debe iniciar sesión para acceder a esta página.",
      });
    }

    // Obtener el usuario que corresponde al token
    const decoded = verifyJWT(token);

    if (!decoded) {
      console.log("Token inválido. El usuario debe iniciar sesión");
      return res.status(401).send({
        error: "El token proporcionado no es válido. Debe iniciar sesión para acceder a esta página.",
      });
    }

    const { id } = decoded;

    let user_logged = await User.findOne({
      where: { id },
      include: {
        model: Roles,
        attributes: ["role"],
      }
    });

    if (!user_logged) {
      console.log("Usuario no encontrado");
      return res.status(404).send({
        error: "No se encontró un usuario que corresponda al token proporcionado.",
      });
    }

    let tokenExpirationDate = user_logged.token_expiration_date;

    if (!tokenExpirationDate || tokenExpirationDate < Date.now()) {
      // Generar nuevo token y actualizar fecha de expiración en la base de datos
      let expirationDate = generateTimeExpirationInSeconds();
      let result = await update_date_for_login({ id: user_logged.id, expirationDate });

      if (!result) {
        return res.status(500).json({ error: "error updating expiration date" });
      }

      console.log("Nuevo token generado");
      tokenExpirationDate = expirationDate;
    }

    // El token está vigente, verificar si es válido
    if (decoded && decoded.id === user_logged.id) {
      console.log("Inicio de sesión exitoso");
      const { role, username, email } = user_logged;
      const token = await generateJWT({ id: user_logged.id, email: user_logged.email, role: user_logged.role });

      return res.json({ message: "Inicio de sesión exitoso", obj: { role, username, email }, token });
    } else {
      console.log("Token inválido. El usuario debe iniciar sesión");
      return res.status(401).send({
        error: "El token proporcionado no es válido. Debe iniciar sesión para acceder a esta página.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
 */