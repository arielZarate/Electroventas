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
      <Box
        sx={{ marginTop: 15, minHeight: "150vh", backgroundColor: "#E0E0E0" }}
      >
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

          <Box>
            {isLoading ? (
              <Loading />
            ) : (
              <Grid container spacing={1} sx={{ m: 1 }}>
                {error ? (
                  <Typography variant="h5" color="error">
                    {JSON.stringify(error)}
                  </Typography>
                ) : (
                  products.map(
                    (element, index) => (
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        xl={3}
                        key={element.id}
                      >
                        <CardProduct data={element} />
                      </Grid>
                    )

                    /*  console.log(element.id) */
                  )
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
