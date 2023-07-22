import React from "react";

import Header from "../../modules/Layout/Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Carousel from "../Carousel";
import CardProduct from "../Cards/CardProduct";
import { productos } from "../../utils/productos.json";

function HomePage() {
  return (
    <>
      <Header />

      {/*  <Grid container spacing={2} xs={{ backgroundColor: "#fefe15" }}> */}
      <Box sx={{ flexGrow: 1, marginTop: 15 }}>
        <Grid container spacing={2} sx={{ margin: 1 }}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              {/* Carrusel */}
              <Box sx={{ height: 200, backgroundColor: "#ddd" }}>Carrusel</Box>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper elevation={3}>
              {/* Sidebar */}

              <Box sx={{ p: 2 }}>
                <Typography variant="h6">Sidebar</Typography>
                {/* Contenido del sidebar */}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9} sm={9}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={2}>
                {productos.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
                    <CardProduct
                      nombre={item.nombre}
                      descripcion={item.descripcion}
                      precio={item.precio}
                      imagen={item.imagen}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
