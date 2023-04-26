
const  User = require("../../models/users/user");
const  Roles = require("../../models/users/roles");

const bcrypt = require("bcrypt");
const {generateJWT}=require('./generateJWT');
const { verifyJWT } = require("./authJWT");

const { update_date_for_login } = require('./auth_update');
//necsito una funcion para controlar el tiempo de expiracion, puedo usar cualquiera
const {generateTimeExpirationInSeconds}=require('./generate_time_expiration_token');


const auth= async(req, res)=> {  
try 
  {
    
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
    if (!validPassword)
      {
      console.log("password incorrect")
      return res.status(400).json({ error: "password incorrect" });
      }



      


      /*antes de generar un token debo saber si tiene uno y si tiene  si esta vigente */
  
    if (!user_logged.token_expiration_date || user_logged.token_expiration_date < Date.now()) {

     
      // Generar nuevo token y actualizar fecha de expiración en la base de datos
       let expirationDate = generateTimeExpirationInSeconds();
      let result = await update_date_for_login({ id: user_logged.id, expirationDate });

      if (!result) {
        return res.status(500).json({ error: "error updating expiration date" });
      }

      console.log("new  token  generate")
      let token = await generateJWT({ id: user_logged.id, email: user_logged.email, role: user_logged.role });
      const { role, username, email } = user_logged;

      console.log(token)
      return res.json({ message: "successful login", obj: { role, username, email }, token });
    }

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

  }catch (error) {
     // manejar la excepción
   // console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
}

module.exports = { auth };


