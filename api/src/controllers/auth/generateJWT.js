
const User=require('../../models/users/user')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const {TIME_EXPIRATION,SECRET_KEY}=process.env
const time_expiration=TIME_EXPIRATION;  //TIEMPO EXPIRACION TOKEN EN SG



//NOTA : para generar un token se necesita un payload y una secret_key

const generateJWT = async (id, email,role) => {
  try {
    const payload = { id,email ,role,
                      //generamos un numero aleatorio cada vez que generamos el token asi es distinto
                      random: crypto.randomBytes(16).toString('hex'),
                    }
    const token = await jwt.sign(payload,SECRET_KEY, { expiresIn:time_expiration+'h', algorithm:'HS256' })
    console.log('jwt created',token)
     return token ;
   } 
    catch (error) {
    console.log(error);
    throw new Error('JWT could not be generated')
  }
}


module.exports = {
  generateJWT
}
