import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material/";
import { Grid, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const StyledBox = styled(Box)({
  backgroundColor: "#f5f5f5",
});

import img1 from "/src/assets/carrusel/carru1.jpg";
import img2 from "/src/assets/carrusel/carru2.jpg";

import img3 from "/src/assets/carrusel/carru3.jpg";

const images = [
  /*   "/src/assets/carrusel/carru1.jpg",
  "/src/assets/carrusel/carru2.jpg",
  "/src/assets/carrusel/carru3.jpg", */
  img1,
  img2,
  img3,
];

function LandingForm() {
  return (
    <StyledBox>
      {/* 
      backgroundColor:'#1a237e'  */}
      <Box
        sx={{
          backgroundColor: "#fafafa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
        }}
      >
        {/*   <Typography variant="h6">Ferretería Online</Typography> */}
        <Box>
          <img src="/src/assets/2.png" width="200vh" height="50vh" alt="logo" />
        </Box>

        {/*        <Link to='/home'> */}
        <Button component={Link} to="/home" variant="contained" color="primary">
          Ir a tienda online
        </Button>
        {/*         </Link> */}
      </Box>

      <Box sx={{ width: "100%", height: "30%" }}>
        <Carousel
          swipe
          animation="slide"
          sx={{ width: "100px", height: "100px", overflow: "hidden" }}
          sxItem={{ width: "calc(100% / 3)" }}
        >
          {images.map((image, index) => (
            <Box key={index}>
              <img
                src={image}
                alt={`Image ${index}`}
                style={{ marginTop: 5, width: "70%" }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Container maxWidth="lg" sx={{ padding: "48px 0" }}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Calidad
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Nos preocupamos por ofrecer los mejores productos y herramientas
              de calidad para tus proyectos de construcción y hogar.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Variedad
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Ofrecemos una amplia selección de herramientas, materiales de
              construcción, equipo de protección personal y más.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Servicio
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Nuestro objetivo es brindarte el mejor servicio al cliente. ¡No
              dudes en contactarnos para cualquier consulta o problema!
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ padding: "48px 0" }}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography variant="h4" align="center" gutterBottom>
              Quienes Somos
            </Typography>
            <Typography variant="body1" align="justify">
              Somos una pequeña empresa dedicada a satisfacer las necesidades de
              nuestros clientes. Con un equipo de empleados altamente
              capacitados y motivados, nos esforzamos por ofrecer productos y
              herramientas de alta calidad para proyectos de construcción y
              hogar. Nos enorgullece ser una Pyme nueva en crecimiento, y
              estamos comprometidos con nuestros objetivos y valores de
              excelencia y servicio al cliente.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              src="/src/assets/quienes_somos.jpg"
              alt="Equipo de nuestra empresa"
              width="500px"
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: "#fafafa",
          color: "black",
          padding: "48px 0",
          marginBottom: "10px",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Contacto
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required id="nombre" label="Nombre" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="email" label="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="asunto" label="Asunto" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mensaje"
                  label="Mensaje"
                  multiline
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

      {/*      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1a237e', color: 'white', padding: '16px 24px' }}>
        <Typography variant="h5">Ferretería Online</Typography>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Box> */}

      <Box
        sx={{
          bottom: 0,
          left: 0,
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#212121",
          color: "white",
          padding: "16px 24px",
        }}
      >
        <Typography variant="h5">Ferretería Online</Typography>
        <IconButton sx={{ color: "white" }}>
          <ShoppingCartIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ m: 2, color: "white" }}>Facebook</IconButton>
          <IconButton sx={{ m: 2, color: "white" }}>Twiteer</IconButton>
          <IconButton sx={{ m: 2, color: "white" }}>Instagram</IconButton>
        </Box>
      </Box>
    </StyledBox>
  );
}

export default LandingForm;
