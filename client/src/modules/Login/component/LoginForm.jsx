import { useState } from 'react';
//ojo con axios ya configure una instancia de axios con los datos creados 
import AxiosInstance from '../../../utils/AxiosInstance';     //import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, Checkbox, Link,Box } from '@mui/material';
 import { LoadingButton } from '@mui/lab'; 

// components


// ------------input de email y password----------------------------------------------------------

import EmailLogin from './loginInput/EmailLogin';
import PasswordLogin from './loginInput/PasswordLogin';
import { Notification } from '../../../helpers/Notification/Notification';
import { getStoreToken ,storeToken} from '../../../helpers/HandlerToken/StorageToken';
import axios from 'axios';
//import {storeToken} from '../../../helpers/HandlerToken/StorageToken';

function validate(input) {
    let error = {};
 
        //email
    if (!input.email) {
      error.email = "Email requerido";
    }
    else{
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(input.email)) 
         error.email = "El email es inválido";
    }
        //password
    if (!input.password) {
         error.password = "Contraseña requerida";
    } else
    if (input.password.length < 4) {
        error.password = "Contraseña invalida menor a 4 caracteres";
    }

    return error;
}




export default function LoginForm() {

  //input  
  const [input ,setInput]=useState(
        {
            email:"", password:"",
        }
     );
     //errors
  const [error,setError]=useState({
   error:false,
/*    message:"" */
  });
  //loading
  const [loading,setloading]=useState(false)

    const navigate = useNavigate();

    //evento handleBlur
    const handleChange = (e) => {
        const {value,name}=e.target;
        //console.log(value);
         setInput(
            {...input,[name]:value}
        )  

        //ahora que ingreso los  datos valido

       setError(
            validate(
                { ...input, [name]: value }
            )
        )  
    
    };


 const handleClick = async(e) => {
    e.preventDefault();
      //  setloading(true);//esta cargando el boton
       
      try {
        
    
    /*     
       //sin axios interceptor
     let token=getStoreToken();
        console.log('getStoreToken',token);
        const response = await axios.post('http://localhost:3000/api/login/',input,
          {
               headers: {
                Authorization: `Bearer ${token}` 
               }
           }  
        ); */

         const response= await AxiosInstance.post('/login/',input);
             if (response.status >= 200 && response.status < 300)
            {
           // localStorage.setItem("token",response.data.token);
              storeToken(response.data.token) 
              // console.log("token guardado");
              //console.log(response.data)
              Notification('success', "Ha iniciado sesion con exito", 'top-end', 2000);//envio una notificacion con sweetAlert2
            }  

        


      } catch (error) {
       
          console.log(error.message)

          let send = error.response.data.error;  
          Notification('error', send,'bottom-end',3000);//envio una notificacion con sweetAlert2
          
 
      }
    }; 

    return (
        <> 

           <Box component='form' onSubmit={handleClick}>
                <Stack spacing={1}>
                    <EmailLogin
                        input={input}
                        handleChange={handleChange}
                        error={error}

                    />
                    <PasswordLogin
                        input={input}
                        handleChange={handleChange}
                        error={error}
                    />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <Checkbox name="remember" label="Remember me" />
                    <Link variant="subtitle2" underline="hover">
                        ¿Has olvidado tu contraseña?
                    </Link>
                </Stack>
                <LoadingButton
                    fullWidth
                    size="medium"
                    type="submit"
                    variant="contained"
                    loading={loading}
                    loadingIndicator="Espere enviando datos ..."
                    /* onClick={handleClick} */
                   /*  loadingPosition='center' */

                    disabled={!input.email || !input.password }
                    >
                   Acceder
                </LoadingButton>
           </Box>
          
        </>
    );
}
