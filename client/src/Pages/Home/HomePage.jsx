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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      {/*  <Carousel /> */}

      <ContentWrapper
        sx={{
          marginX: 1,
        }}
      >
        <Drawer isOpen={isDrawerOpen} sidebar={<Sidebar />}>
          {isLoading ? (
            <Loading />
          ) : (
            <Grid
              container
              columnSpacing={2}
              rowSpacing={1}
              sx={{ marginTop: 2, marginX: 1 }}
            >
              {error ? (
                <Typography variant="h5" color="error">
                  {JSON.stringify(error)}
                </Typography>
              ) : (
                products.map((element, index) => (
                  <Grid xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
                    <CardProduct data={element} />
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Drawer>
      </ContentWrapper>

      {/*  </Grid> */}

      {/*  <Pagination
            page={page}
            count={count}
            setPage={(n) => {
              setPage(n);
            }}
          /> */}
      {/*  </CenteredGrid> */}
      {/*  </Box> */}
    </>
  );
}

/* NOTA STYLED DE MUI ES COMO EL DE STYLED COMPONENT 😎 */
const ContentWrapper = styled(Box)({
  marginX: 10,
  display: "flex",
  flexDirection: "column",
  //alignItems: "center",

  // justifyContent: "center",
  minHeight: "100vh", // Altura mínima para que el contenido se vea centrado
  backgroundColor: "#f0f0f0",
});

export default HomePage;
