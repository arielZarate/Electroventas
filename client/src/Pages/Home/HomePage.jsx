import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Carousel from "../../Components/Carousel2";
import CardProduct from "../../Components/Cards/CardProduct";
//layout
import Drawer from "../../Components/Layout/Drawer";
import Sidebar from "../../Components/Layout/Sidebar";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/feactures/Thunks/products";
import Loading from "../../Components/Loading/Loading";

//HomePage
function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productStore.products);
  let error = useSelector((state) => state.productStore.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulación de la carga de datos (puedes reemplazar esto con una llamada a la API real)
    setTimeout(() => {
      setIsLoading(false); // Marcar como no cargando después de 1 segundo (por ejemplo)
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ marginTop: 15, minHeight: "150vh" }}>
        <Carousel />
        <Drawer
          sidebar={
            <Sidebar
            // setFilter={(e) => {
            //setFilter(e);
            // }}
            />
          }
          /*  navbar={
            <SortBar
           
          } */
        >
          {/*<div>Cargando...</div> */}

          <Box sx={{ m: 0 }}>
            {isLoading ? (
              <Loading />
            ) : (
              <Grid container spacing={1}>
                {error ? (
                  <Typography variant="h5" color="error">
                    {JSON.stringify(error)}
                  </Typography>
                ) : (
                  products.map((element, index) => (
                    <Grid xs={12} sm={6} md={3} lg={4} xl={4} key={index}>
                      <CardProduct data={element} />
                    </Grid>
                  ))
                )}
              </Grid>
            )}
          </Box>
        </Drawer>

        {/*  <Pagination
            page={page}
            count={count}
            setPage={(n) => {
              setPage(n);
            }}
          /> */}
        {/*  </div> */}
      </Box>
    </>
  );
}

export default HomePage;
