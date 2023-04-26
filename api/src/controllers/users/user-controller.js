const User = require('../../models/users/user')
const Roles = require('../../models/users/roles')

//const nodemailer = require("nodemailer");
//const { updateAvatarImage } = require("../middlewares/cloudinary.js");
//const fs = require("fs-extra");
//const { Op } = require("sequelize");

async function getUsers(req, res) {
  //busca por email
  let { email } = req.query;
 // console.log(email);
  if (email) {
    try {
      let findUser = await User.findAll({
        where: { email },

      include: {
         model: Roles,
        attributes: ["role"], }, 
      });
      //console.log(findUser[0].dataValues);
      findUser
        ? res.status(201).json(findUser[0].dataValues)
        : res.status(400).json("user by email not found");
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
    }
  } else { 
    try {
      let allUsers = await User.findAll({

          include: {
          model: Roles,
          attributes: ["role"],
        },

      })
       // where: { status: 1 },
   
    
      allUsers.length
      ? res.status(200).json(allUsers)
      :res.status(404).json("Users not found")    
      
    } catch (error) {
      res.status(400).json({ message: error });
    }

}
}


//======================================

async function getUserById(req, res) {
  let { id } = req.params;
  try {
    let user = await User.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
}

//============delete=============================

async function deleteUser(req, res) {
  let { id } = req.params;
  try {
   // let findUser = await User.findByPk(id);
   await User.destroy({
        where:{id: id},
       })
       return res.json("User deleted"); 
    
  }
catch(error)
{
   return res.status(400).json({ message: error });
}
}
//===========================================
async function restoreUser(req, res) {
  let { id } = req.params;
  try {
     if (!id) throw new Error("id undefined");
       const restoreById = await User.restore({
      where: {
        id: id,
      },
    });
    restoreById
      ? res.json(`User with id ${restoreById} restored`)
      : res.status(400).json("could not restore value");
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

//============update=======================
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
      const userById = await User.findByPk(id);
      if (!userById) {
        throw new Error("User not found by Id");
      } else {
      let { firstname,lastname ,image,username, email, password, token_expiration_date} = req.body;

     /*    
          use('un') middleware
        if (
          !firstname ||
          !lastname ||
          !image ||
          !username ||
          !email ||
          !password
      
        ) {
          throw new Error("undefined parameter, check 😬");
        } else { */
          //actualizo con lo pasado en parametros
          if (firstname) userById.name = firstname;
          if (lastname) userById.lastname = lastname;
          if (image) userById.image = image;
          if (username) userById.username = username;
          if (email) userById.email = email;
          if (password) userById.password = password;
          if(token_expiration_date)userById.token_expiration_date=token_expiration_date;
      
          await userById.save();  //esto guarda los cambios , no hace falta pasar todos los params tampoco actualiza solo lo que se pasa :)
          return res.status(200).json(userById);
        }
     // }
    
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};






module.exports = {
  getUsers,
  getUserById,
  restoreUser,
  deleteUser,
  updateUser,

 /* 
  statusCero,
  pageCurrentOne,
  pageCurrentCero,
  rootUser, */
};






//==========================================
/* async function pageCurrentOne(req, res) {
  let { id } = req.params;
  console.log(id);
  if (id === "0") {
    try {
      const findUsers = await Users.findAll({
        where: { status: { [Op.eq]: 1 } },
      });
      const pages = Math.ceil(findUsers.length / 10);
      return res.status(200).json({ status: "success", pages });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "error", e });
    }
  } else {
    let SelectedP = [];
    itemsPage = parseInt(id);

    let EndCursor = itemsPage * 10;
    let StartCursor = EndCursor - 10;
    try {
      let Usuarios = await Users.findAll({
        where: { status: { [Op.eq]: 1 } },
        include: [
          {
            model: Roles,
            attributes: ["rol"],
          },
        ],
      });

      const userArray = Usuarios;
      SelectedP = userArray.slice(StartCursor, EndCursor);
      res.status(200).json(SelectedP);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
 */
//============me parace que es paginado===============================
/* async function pageCurrentCero(req, res) {
  let { id } = req.params;
  console.log(id);
  if (id === "0") {
    try {
      const findUsers = await Users.findAll({
        where: { status: { [Op.eq]: 0 } },
      });
      const pages = Math.ceil(findUsers.length / 10);
      return res.status(200).json({ status: "success", pages });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "error", e });
    }
  } else {
    let SelectedP = [];
    itemsPage = parseInt(id);

    let EndCursor = itemsPage * 10;
    let StartCursor = EndCursor - 10;
    try {
      let Usuarios = await Users.findAll({
        where: { status: { [Op.eq]: 0 } },
        include: [
          {
            model: Roles,
            attributes: ["rol"],
          },
        ],
      });

      const userArray = Usuarios;
      SelectedP = userArray.slice(StartCursor, EndCursor);
      res.status(200).json(SelectedP);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
} */

//================================================
/* async function rootUser(req, res) {
  const { rol, userId } = req.body;
  try {
    const findRol = await Roles.findOne({ where: { rol } });
    const findUser = await Users.findByPk(userId);
    await findUser.setRole(findRol);
    return res.status(200).json(findUser);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
} */



/* async function statusCero(req, res) {
  try {
    let allUsers = await Users.findAll({
      where: { status: 0 },
      include: { model: Roles, attributes: ["rol"] },
    });

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).json({ message: error });
  }
}
 */