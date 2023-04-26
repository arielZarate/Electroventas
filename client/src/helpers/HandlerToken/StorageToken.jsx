
import CryptoJS from 'crypto-js';
const { VITE_ENCRIPTED_TOKEN }=import.meta.env;


//esto es una funcion que sirve para almacenar el token en el navegador y encriptarlo

export const storeToken = async (access_token) => {

        //debo crear un status tipo logueado para poder guardar antes o verificado
         try {
           
            ///console.log('origin token :', token)   
            //debo usar una clave secreta 
             const encryptedToken = CryptoJS.AES.encrypt(access_token, VITE_ENCRIPTED_TOKEN).toString();
            localStorage.setItem('access_token', encryptedToken);
            //console.log('Token stored successfully');
        } catch (error) {
            console.error(error);
        }
    
};



//esto es una funcion que sirve para recuperar el token del  navegador y desencriptarlo
export const getStoreToken = () => {
    const encryptedToken = localStorage.getItem('access_token');
    if (encryptedToken) {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, VITE_ENCRIPTED_TOKEN);
        const token_recovery = bytes.toString(CryptoJS.enc.Utf8);
        //console.log('Token retrieved successfully',  token_recovery )
       
        return token_recovery;
    } else {
        //console.log('Token not found, debe loguearse');
        return null ;
    }
};




