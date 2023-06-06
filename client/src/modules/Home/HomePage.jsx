import React from "react";

import Header from "../Layout/Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Carousel from "../../Components/Carousel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cards = [
  { id: 1, title: "Card 1", content: "Contenido de la Card 1" },
  { id: 2, title: "Card 2", content: "Contenido de la Card 2" },
  { id: 3, title: "Card 3", content: "Contenido de la Card 3" },
  { id: 4, title: "Card 4", content: "Contenido de la Card 4" },
  { id: 5, title: "Card 5", content: "Contenido de la Card 5" },
  { id: 6, title: "Card 6", content: "Contenido de la Card 6" },
  { id: 7, title: "Card 7", content: "Contenido de la Card 7" },
  { id: 8, title: "Card 8", content: "Contenido de la Card 8" },
  { id: 9, title: "Card 9", content: "Contenido de la Card 9" },
];

function HomePage() {
  return (
    <>
      <Header />

      {/*  <Grid container spacing={2} xs={{ backgroundColor: "#fefe15" }}> */}
      <Box sx={{ flexGrow: 1, marginTop: "8rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              {/* Carrusel */}
              <Box sx={{ height: 200, backgroundColor: "#ddd" }}>
                <Carousel />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper
              elevation={3}
              sx={{ display: "flex", alignItems: "stretch" }}
            >
              {/* Sidebar */}

              {/* 
              
              */}
              <Box sx={{ p: 2 }}>
                <Typography variant="h6">Sidebar</Typography>
                {/* Contenido del sidebar */}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={8}>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                {cards.map((card) => (
                  <Grid item xs={12} md={4} key={card.id}>
                    <Item>{card.id}</Item>
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
