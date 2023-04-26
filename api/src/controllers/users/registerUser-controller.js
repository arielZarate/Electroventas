const User = require('../../models/users/user')
const Roles = require('../../models/users/roles')
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    //let role = await Roles.findOne({ where: { name: 'User' } });
    let { firstname,lastname ,birthday,country,city ,phone ,username, email, password} = req.body;

     //console.log(firstname,lastname,image,username,email,password)
     
     const newUsuario = await User.create({
     firstname,
     lastname,
     birthday,
     country,
     city,
     phone,
     username,
     email,
     password:await bcrypt.hash(password, 10), //encripto con bcrypt
    // roleId: role.id    NO HACE FALTA YA QUE LA RELACION DE ASOCIACION LO GENERA SOLO 😁
    });

    //await newUsuario.addLocation(location); //esto es para muchos a muchos
    const role = await Roles.findByPk(1);
    await newUsuario.setRole(role);
   // console.log(newUsuario.dataValues)

    newUsuario
      ? res.status(200).send("Usuario created successfully 👌")
      : res.status(404).json("Usuario not created 😣 "); 
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports={registerUser}