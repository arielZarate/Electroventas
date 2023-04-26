import axios from 'axios';
import { getStoreToken } from '../helpers/HandlerToken/StorageToken';


// esta funcion configura el axios para que ya incluya la url  y el headers con al autorization


const AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


/*  AxiosInstance.interceptors.request.use((config) => {
    const token = getStoreToken();
    console.log(token);
     if (token) {
        //aca almaceno el token en Autorization
        config.headers.authorization = `Bearer ${token}`;
    }
    return config; 
}); 
 */
export default AxiosInstance;
