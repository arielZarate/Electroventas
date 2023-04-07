const jwt = require('jsonwebtoken')
const {SECRET_KEY}=process.env
const generateJWT =  (id, email,role) => {
  try {
    const payload = { id, email ,role}
    const token =  jwt.sign(payload,SECRET_KEY, { expiresIn: '2h' })
    console.log('token',token)
    return token
  } catch (error) {
    console.log(error)
    throw new Error('JWT could not be generated')
  }
}


module.exports = {
  generateJWT
}
