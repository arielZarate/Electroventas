
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button,Box } from '@mui/material';
import {Link as Redirect} from 'react-router-dom'
// hooks
/* import useResponsive from '../hooks/useResponsive'; */
// components
/* import Logo from '../components/logo'; */

//icons
import { Icon } from '@iconify/react';
//component
import  LoginForm  from '../../component/Login & Register/Form Login/LoginForm';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
   marginTop:'15%', 
   //imagen de fondo 
 /*    backgroundImage: `url('/src/assets/login3.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",  */
    maxHeight: 500, 
    maxWidth: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    /*boxShadow: theme.customShadows.card, */
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
/*     const mdUp = useResponsive('up', 'md'); */

    return (
        <>
            <StyledRoot>


              {/*  
              
              LOGO
              <Box sx={{
                    position:'fixed',
                    top: { xs: 16, sm: 24, md: 40 },
                    left: { xs: 16, sm: 24, md: 40 },
                }}>
                    <img src='/src/assets/logo.jpg' alt='logo' width='40px' height='40px' />
             </Box> */}

                {/* mdUp && ( */
                <StyledSection>
                        <Typography variant="h3" sx={{ px:1, mt: 3, mb: 5 }}>
                         Bienvenido de nuevo
                        </Typography> 
                        <img src="src/assets/login2.png" alt="login" />  
                </StyledSection>
              /*   ) */
                }

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Iniciar Sesion
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 5 }}>
                         ¿No tienes una cuenta? {''}
                            <Link component={Redirect} to='/register' variant="subtitle2">Vamos a registro</Link>
                        </Typography>

                        <Stack direction="row" spacing={2} >
                            <Button fullWidth size="large" color="inherit" variant="contained" >
                             <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="contained">
                                <Icon icon="eva:facebook-fill" color="#1877F2" width={22} height={22} /> 
                            </Button>

                            <Button fullWidth size="large" color="inherit" variant="contained">
                              <Icon icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} /> 
                            </Button>
                        </Stack>

                        <Divider sx={{ my:3 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O ingrese por correo y contraseña
                            </Typography>
                        </Divider>

                        <LoginForm />
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
