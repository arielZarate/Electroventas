import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, IconButton, Typography, Container } from "@mui/material";
import { useDispatch } from "react-redux";
//iconos
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa"; //orden alfabetico
import { BsArrowDown, BsArrowUp } from "react-icons/bs"; //orden

//pesos
import { FaDollarSign, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

import { orderByPrice } from "../../redux/feactures/Thunks/products";
export default function SortBar() {
  const dispatch = useDispatch();

  const handlerClickPrecio = (order) => {
    // console.log(order);
    dispatch(orderByPrice(order));
  };

  return (
    <>
      <Box>
        <Link to="/formProduct">
          <Button variant="contained" color="secondary">
            Nuevo Producto
          </Button>
        </Link>
        <Link to="/formBrand">
          <Button variant="contained">Nuevas Marcas</Button>
        </Link>
        <Link to="/formCategory">
          <Button variant="contained" color="secondary">
            Nuevas Categorias
          </Button>
        </Link>

        {/* ordnear por name */}

        <Typography variant="subtitle" color="initial" sx={{ marginLeft: 1 }}>
          precio
        </Typography>
        <IconButton onClick={() => handlerClickPrecio("UP")}>
          <BsArrowUp />
        </IconButton>
        <IconButton onClick={() => handlerClickPrecio("DOWN")}>
          <BsArrowDown />
        </IconButton>
      </Box>
    </>
  );
}
