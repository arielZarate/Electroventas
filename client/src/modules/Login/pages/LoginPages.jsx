

import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button,Box } from '@mui/material';
import {Link as Redirect} from 'react-router-dom'


//icons
import { Icon } from '@iconify/react';
//component
import  LoginForm  from '../component/LoginForm';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
    minHeight: '100vh', // Para que el fondo gris cubra todo el alto del viewport
    minWidth:'100vw',
    textAlign:'center',
     backgroundColor: '#f5f5f5'
}));



const StyledContent = styled('div')(({ theme }) => ({
    maxWidth:500,
    maxHeight:500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
   /*  alignItems:'center', */
    padding: theme.spacing(12, 0),
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90%',
        padding: theme.spacing(8, 0),
        marginTop: '20vh',
    },
   
}));

const StyledCard = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    border: '1px solid white',
    borderRadius: '10px',
    padding: theme.spacing(4),
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
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

            {/*     { mdUp && ( 
             
                 ) 
                } */}

            <Container maxWidth="sm"  >
                <StyledContent>{/* este esta porque antes habia otro contenedor aparte del card */}
                 <StyledCard>
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
                           <Divider sx={{ my: 3 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
