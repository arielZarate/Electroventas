const User = require('../../models/users/user');


//{body}
const update_date_for_login =async ({id,expirationDate}) => {
  try {

   /* 
   nota: esta funcion actualiza los datos cuando se loguea por 1era vez o 
   vcada vez que se loguea verifica el token y su tiempo de expiracion ha caducado,
   locual recibe el nuevo tiempo de expìracion y la nueva secret_key_tempory generada
   
   */

    const [updatedRows] = await User.update(
     {
      token_expiration_date:expirationDate,
    },
    { where: {id} }
    );
   console.log(updatedRows);
    if (updatedRows === 1) {
      return true;
    } else {
       return false // throw new Error('User not found or not updated');
    } 
  } catch (error) {
    throw new Error('Could not update user', error.message);
  }

};

module.exports={update_date_for_login}
