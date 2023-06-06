import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  Box,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";

//icons
import { FcGoogle } from "react-icons/fc";

//component
import LoginForm from "../component/LoginForm";
import fondo from "../../../assets/fondo2.jpg";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  minHeight: "100vh", // Para que el fondo gris cubra todo el alto del viewport
  minWidth: "100vw",
  textAlign: "center",
  /* backgroundColor: "#fefefe", */
  backgroundImage: `url(${fondo})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  /*   backgroundAttachment: "fixed", */
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

// ----------------------------------------------------------------------

export default function LoginPages() {
  /*     const mdUp = useResponsive('up', 'md'); */

  return (
    <>
      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            {/* este esta porque antes habia otro contenedor aparte del card */}
            <StyledCard>
              <Typography variant="h4" gutterBottom>
                Iniciar Sesion
              </Typography>

              <Typography variant="body2" sx={{ mb: 5 }}>
                ¿No tienes una cuenta? {""}
                <LinkRouter to="/register">
                  <Link variant="subtitle2">Vamos a registro</Link>
                </LinkRouter>
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  startIcon={<GoogleIcon />}
                  variant="contained"
                  fullWidth
                  style={{ backgroundColor: "#DB4437", color: "white" }}
                >
                  Google
                </Button>

                <Button
                  startIcon={<FacebookIcon />}
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Facebook
                </Button>
              </Stack>
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  O ingrese por correo y contraseña
                </Typography>
              </Divider>

              <LoginForm />
            </StyledCard>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
