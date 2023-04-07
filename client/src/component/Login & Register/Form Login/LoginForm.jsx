import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, Checkbox, Link, } from '@mui/material';
 import { LoadingButton } from '@mui/lab'; 

// components


// ------------input de email y password----------------------------------------------------------

import EmailLogin from './login input/EmailLogin';
import PasswordLogin from './login input/PasswordLogin';






function validate(input) {
    let errors = {};

    if (input.email) {
        if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(input.email)
        ) {
            errors.email = "El email es inválido";
        }
    }
    if (!input.password) {
        errors.password = "Se requiere contraseña";
    }

    return errors;
}





export default function LoginForm() {
    const [input ,setInput]=useState(
        {
            email:"", password:"",
        }
     );
     //errors
  const [errors,setErrors]=useState({});

    const navigate = useNavigate();

    //evento handleBlur
    const handleChange = (e) => {
        const {value,name}=e.target;
        //console.log(value);
         setInput(
            {...input,[name]:value}
        )  

        //ahora que ingreso losa datos valido

        setErrors(
            validate(
                { ...input, [name]: value }
            )
        )
    
    };


    const handleClick = async() => {
     
     const response =await axios.post('/login/',input);

     console.log(response.data)  //aca tengo la data y el token para guardarlo en el navegador 

     setInput(
        {email:"",password:""}
     )

    // response?console.log("ha ingresado con exito"):console.log("no ha ingresado")

    //navigate('/LoginForm', { replace: true }); // el replace reemplaza la entrada anterior por esta 
    };

    return (
        <>
            <Stack spacing={1}>
             <EmailLogin 
              input={input}
             handleChange={handleChange}
             errors={errors} 

            />
             <PasswordLogin 
              input={input}
              handleChange={handleChange}
              errors={errors} 
             />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <Checkbox name="remember" label="Remember me" />
                <Link variant="subtitle2" underline="hover">
                    ¿Has olvidado tu contraseña?
                </Link>
            </Stack>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
               Iniciar sesion
            </LoadingButton>
        </>
    );
}
