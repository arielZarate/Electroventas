

/* 

DEPENDE LO QUE YO NECESITE USARE LA FUNCION

*/
const {TIME_EXPIRATION}=process.env
const time_expiration=TIME_EXPIRATION;  //TIEMPO EXPIRACION TOKEN EN SG

/* 
retorna la expirationDate en hs
*/
  const generateTimeExpirationInHs=()=>{
    let expirationDate = new Date();
    //en hs
    expirationDate.setHours(expirationDate.getHours() +time_expiration);
    return expirationDate;
  }
   

  /* 
  En este código, multiplicamos time_expiration por 60 para convertirlo de horas a
   minutos antes de agregarlo a la fecha actual utilizando setMinutes()
  */
const generateTimeExpirationInMinutes = () => {
  let expirationDate = new Date();
  // en minutos
  expirationDate.setMinutes(expirationDate.getMinutes() + (time_expiration * 60));
  return expirationDate;
}

   

/* 
Para convertir la función generateTimeExpirationInHs() que genera la fecha de expiración 
    en horas a una función que genere la fecha de expiración en segundos,
 debe multiplicar time_expiration por 3600 para convertirlo de horas a segundos 
 antes de agregarlo a la fecha actual utilizando el método setSeconds()

*/
const generateTimeExpirationInSeconds = () => {
  let expirationDate = new Date();
  // en segundos
  expirationDate.setSeconds(expirationDate.getSeconds() + (time_expiration * 3600));
  return expirationDate;
}




module.exports={generateTimeExpirationInHs,generateTimeExpirationInMinutes,generateTimeExpirationInSeconds}