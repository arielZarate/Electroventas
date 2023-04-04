
const  User = require("../../models/users/user");
const  Roles = require("../../models/users/roles");
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");
const {generateJWT,verify}=require('./JWT')
const {SECRET_KEY}=process.env;

async function login(req, res) {
  let { email, password } = req.body;

  try {
    let userRecovery = await User.findOne({
      where: { email },
      include: {
        model: Roles,
        attributes: ["role"],
      }
    });
    if (!userRecovery)
      return res.status(400).json({ error: "email is not registered" });

      //desencripto
    let validPassword = await bcrypt.compare(password, userRecovery.password);
    if (!validPassword)
      return res.status(400).json({ error: "password incorrect" });


  //si todo es correcto
   /*  let token = jwt.sign(
      {
       id: userRecovery.id,
        name: userRecovery.userName,
        role: userRecovery.role,
      },
        'mi_clave_secreta'     
    );  */
 
    
    let token =generateJWT(userRecovery.id,userRecovery.email )

    if(verify(token,SECRET_KEY))
    {
       res.json({ message: "successful login",userRecovery,token });
    }

   //ACA LE MANDO EL TOKEN AL FRONT
    //res.json({ message: "successful login",userRecovery,token });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

module.exports = { login };






/* 

 */
/* 

 codigo de chtgpt


app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validar las credenciales del usuario en la base de datos
  if (username === 'usuario' && password === 'contraseña') {
    // Si son válidas, generar un token JWT y enviarlo en la respuesta
    const token = jwt.sign({ user_id: 123 }, 'mi_clave_secreta');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});




una vez logueado vamos a las rutas que son protegidas ...

app.get('/api/protected', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  } 

  // Verificar el token JWT y decodificar la información del usuario
  jwt.verify(token, 'mi_clave_secreta', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.user = decoded;
    // Realizar acciones en función de la información del usuario
    res.json({ message: 'Recurso protegido' });
  });
});
 */
