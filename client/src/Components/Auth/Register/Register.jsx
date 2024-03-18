import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../redux/feactures/Thunks/user";
import { Notification } from "../../../helpers/Notification/Notification";
import Loading from "../../Loading/Loading";

//styles

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  minHeight: "100vh", // Para que el fondo gris cubra todo el alto del viewport
  minWidth: "90vh",
  textAlign: "center",
  //backgroundColor: "#fefefe",
  /*  backgroundImage: `url(${fondo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
    backgroundAttachment: "fixed", */
}));
const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 500,
  maxHeight: 500,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  /*  alignItems:'center', */
  padding: theme.spacing(12, 0),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
    padding: theme.spacing(8, 0),
    marginTop: "20vh",
  },
}));

const StyledCard = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  border: "1px solid white",
  borderRadius: "10px",
  padding: theme.spacing(4),
  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
}));

function validatePassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return { valid: false, message: "Las contraseñas no coinciden" };
  }

  if (password.length < 6 || confirmPassword.length < 6) {
    return {
      valid: false,
      message: "La contraseña debe tener al menos 6 caracteres",
    };
  }

  return { valid: true, message: "Contraseñas válidas" };
}

function Register() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    cuil: "",
    shippingAddress: "",
  });

  //errors
  const [error, setError] = useState({});
  // const [registered, setRegistered] = useState(false);
  //loading
  const [loadingButton, setLoadingButton] = useState(false);
  const [loading, setLoading] = useState(true);
  //==========handler==========
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  //========handleSubmit===========
  async function handleSubmit(e) {
    e.preventDefault();

    const passwordValidation = validatePassword(
      input.password,
      input.confirmPassword
    );

    if (!passwordValidation.valid) {
      // alert(passwordValidation.message);
      Notification(
        "info",
        `${passwordValidation.message}`,
        "bottom-start",
        3000
      );
    } else {
      //  alert(passwordValidation.message);
      Notification(
        "info",
        `${passwordValidation.message}`,
        "bottom-start",
        3000
      );
    }
    //console.log(input);
    try {
      setLoadingButton(true); // Cambiar el estado de carga

      dispatch(
        RegisterUser({
          name: input.name,
          lastName: input.lastName,
          email: input.email,
          password: input.password,
          cuil: input.cuil,
          shippingAddress: input.shippingAddress,
        })
      );
    } catch (error) {
      //setRegistered(false);
      console.log(error);
      Notification("error", `${error.message}`, "bottom-end", 3000);
    } finally {
      // Retraso después de la acción de registro
      setTimeout(() => {
        setLoadingButton(false); // Desactivar estado de carga después de la acción de registro
      }, 1000); // Tiempo de retraso después de la acción de registro
    }
  }

  return (
    <StyledRoot>
      <Container maxWidth="sm" sx={{ marginTop: 35 }}>
        {loading ? (
          <Loading />
        ) : (
          <StyledContent>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ textAlign: "center" }}
              >
                CREAR NUEVA CUENTA DE CLIENTE
              </Typography>

              <StyledCard>
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{ textAlign: "start" }}
                  >
                    INFORMACION PERSONAL
                  </Typography>

                  <TextField
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    value={input.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    error={error.name ? true : false}
                    helperText={error.name ? error.name : ""}
                  />
                  <TextField
                    name="lastName"
                    label="Apellido"
                    variant="outlined"
                    value={input.lastName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    error={error.lastName ? true : false}
                    helperText={error.lastName ? error.lastName : ""}
                  />
                  <TextField
                    name="cuil"
                    label="CUIL"
                    variant="outlined"
                    value={input.cuil}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    error={error.cuil ? true : false}
                    helperText={error.cuil ? error.cuil : ""}
                  />
                  <TextField
                    name="shippingAddress"
                    label="Dirección de Envío"
                    variant="outlined"
                    value={input.shippingAddress}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    error={error.shippingAddress ? true : false}
                    helperText={
                      error.shippingAddress ? error.shippingAddress : ""
                    }
                  />
                </Stack>

                <Divider />
                <Stack spacing={3} sx={{ mt: 8 }}>
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{ textAlign: "start" }}
                  >
                    INFORMACIÓN DE INICIO DE SESIÓN
                  </Typography>

                  <TextField
                    name="email"
                    type="email"
                    label="Correo electronico"
                    variant="outlined"
                    autoFocus={true}
                    value={input.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    error={error.email ? true : false}
                    helperText={error.email ? error.email : ""}
                  />
                  <TextField
                    name="password"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    value={input.password}
                    onChange={handleChange}
                    error={error.password ? true : false}
                    helperText={error.password ? error.password : ""}
                  />
                  <TextField
                    name="confirmPassword"
                    label="Confirmar Contraseña"
                    type="password"
                    variant="outlined"
                    value={input.confirmPassword}
                    onChange={handleChange}
                    error={error.password ? true : false}
                    helperText={error.password ? error.password : ""}
                  />
                </Stack>

                <LoadingButton
                  sx={{ mt: 3, height: 50 }}
                  fullWidth
                  size="medium"
                  type="submit"
                  variant="contained"
                  color="secondary"
                  loading={loadingButton}
                  disabled={loadingButton} // Deshabilitar el botón durante la carga
                  loadingIndicator="Espere enviando datos ..."

                  /*  loadingPosition='center' */

                  /* disabled={
                  !input.email ||
                  !input.password ||
                  !input.confirmPassword ||
                  !input.name ||
                  !input.lastName ||
                  !input.shippingAddress
                } */
                >
                  Registrar
                </LoadingButton>
              </StyledCard>
            </Box>
          </StyledContent>
        )}
      </Container>
    </StyledRoot>
  );
}

export default Register;
