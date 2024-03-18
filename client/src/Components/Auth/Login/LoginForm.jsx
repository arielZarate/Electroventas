import { useState, useEffect } from "react";
//ojo con axios ya configure una instancia de axios con los datos creados
import AxiosInstance from "../../../utils/AxiosInstance"; //import axios from 'axios';
import { useNavigate } from "react-router-dom";
// @mui
import { Stack, Checkbox, Link, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// components

// ------------input de email y password----------------------------------------------------------

import EmailLogin from "./loginInput/EmailLogin";
import PasswordLogin from "./loginInput/PasswordLogin";
import { Notification } from "../../../helpers/Notification/Notification";
import { LoginUser } from "../../../redux/feactures/Thunks/user";
import { useDispatch, useSelector } from "react-redux";
//=================validacion de email password=======================
function validate(input) {
  let error = {};

  //email
  if (!input.email) {
    error.email = "Email requerido";
  } else {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(input.email))
      error.email = "El email es inválido";
  }
  //password
  if (!input.password) {
    error.password = "Contraseña requerida";
  } else if (input.password.length < 6) {
    error.password = "Contraseña invalida menor a 6 caracteres";
  }

  return error;
}
//======================================================================

export default function LoginForm() {
  //input
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  //errors
  const [error, setError] = useState({});
  //loading
  const [loadingButton, setLoadingButton] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.userStore.isLogged);

  //evento handleBlur
  const handleChange = (e) => {
    const { value, name } = e.target;
    //console.log(value);
    setInput({ ...input, [name]: value });

    //ahora que ingreso los  datos valido

    setError(validate({ ...input, [name]: value }));
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  //===========enviando datos al firebase o back =============
  const handleClick = async (e) => {
    e.preventDefault();

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

      //    const response = await AxiosInstance.post("/login/", input);
      //   if (response.status >= 200 && response.status < 300) {
      setLoadingButton(true); // Activar la carga
      dispatch(LoginUser({ email: input.email, password: input.password }));
    } catch (error) {
      setLoadingButton(false);
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoadingButton(false);
      }, 1000);
    }
  };

  /*   if (isLogged) {
    navigate("/home");
  } */
  //=============================================================
  return (
    <>
      <Box component="form" onSubmit={handleClick}>
        <Stack spacing={1}>
          <EmailLogin input={input} handleChange={handleChange} error={error} />
          <PasswordLogin
            input={input}
            handleChange={handleChange}
            error={error}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
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
          loading={loadingButton}
          // disabled={loadingButton}
          loadingIndicator="Espere enviando datos ..."
          /* onClick={handleClick} */
          /*  loadingPosition='center' */

          disabled={!input.email || !input.password}
        >
          Acceder
        </LoadingButton>
      </Box>
    </>
  );
}
