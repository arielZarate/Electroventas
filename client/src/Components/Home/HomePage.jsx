import React, { useEffect } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "../../modules/Layout/Drawer";
import Carousel from "../Carousel2";
import CardProduct from "../Cards/CardProduct";
//import { productos } from "../../utils/productos.json";
import Sidebar from "../../modules/Layout/Sidebar";
import SortBar from "../../modules/Layout/SortBar";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/feactures/Thunks/products";

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productStore.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {/*     <Box sx={{ flexGrow: 1, marginTop: 15 }}>
        <Grid container spacing={2} sx={{ margin: 1 }}>
          <Grid item xs={12}>
            <Paper elevation={3}>
           
              <Box sx={{ height: 200, backgroundColor: "#ddd" }}>
             
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box> */}

      <Carousel />
      <Drawer
        sidebar={
          <Sidebar
          /*  setFilter={(e) => {
              setFilter(e);
            }} */
          />
        }
        navbar={
          <SortBar
          /*  setSort={(e) => {
              setSort(e);
            }} */
          />
        }
      >
        {/* <div className="px-4 py-8 relative w-fit mx-auto sm:mx-0 sm:w-auto"> */}
        {/* <Grid childHeight={260} childWidth={200}>
            {productos.map((item, index) => {
              return <CardProduct key={index} data={item} />;
            })}
          </Grid> */}

        <Box sx={{ margin: 1 }}>
          <Grid container spacing={2}>
            {products?.map((element, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <CardProduct key={index} data={element} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/*  <Pagination
            page={page}
            count={count}
            setPage={(n) => {
              setPage(n);
            }}
          /> */}
        {/*  </div> */}
      </Drawer>
    </>
  );
}

export default HomePage;
