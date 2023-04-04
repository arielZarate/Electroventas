const {data} = require('../utils/roles.json')
const Roles= require('../models/users/roles.js')

//el helper es un controlador mas que ejecuta una vez y esta seteado no debe hacer nada mas que cargar lo que le instancio en el json

const setRoles =() => {
    try{
      data.forEach( async(e) => {
            await Roles.findOrCreate({ 
                where: {
                    id:  e.id,
                    role : e.rol
                }
            })
        });
    }catch(error){
        return error
    }
}


module.exports={setRoles}