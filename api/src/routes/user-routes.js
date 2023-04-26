const express = require("express");
const router = express.Router();
const {getUsers,
       getUserById,
       restoreUser,
       deleteUser,
       updateUser}=require('../controllers/users/user-controller');

const middleware=require('../middlewares/user-validate')

const {registerUser}=require('../controllers/users/registerUser-controller')

       //Rutes
router.get("/:id",getUserById); //trae por id
//(router.get("/:name", getProduct); //trae por query o sea el name
router.get("/",getUsers); //trae todos



//agregados
router.put("/restore/:id",restoreUser); //activa el user
router.put("/:id",middleware.validateUser,updateUser); //actualiza
router.delete("/:id",deleteUser); //elimina


//register-controler
router.post("/",middleware.validateUser,registerUser); //crea

module.exports = router;
