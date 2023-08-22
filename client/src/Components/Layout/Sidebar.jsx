import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Link,
  Box,
  Typography,
  TextField,
  Divider,
} from "@mui/material";

import muiBox from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

import { getBrands } from "../../redux/feactures/Thunks/brand";
import { getCategories } from "../../redux/feactures/Thunks/category";
import {
  getProductByCategory,
  getProductByBrand,
} from "../../redux/feactures/Thunks/products";

/* 
=============================SIDEBAR==============================================================

*/
export default function Sidebar() {
  //========MARCAS==========
  /*   const allMarcas = [
    "Philips",
    "General Electric (GE)",
    "Osram",
    "Schneider Electric",
    "Siemens",
    "Legrand",
    "Eaton",
    "ABB",
  ]; */

  let dispatch = useDispatch();
  let _brands = useSelector((state) => state.brandStore.brands);
  //console.log(_brands);
  const _categories = useSelector((state) => state.categoryStore.categories);
  //console.log(_categories);

  const [brandShow, setBrandShow] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  //montar el componenente
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  //===================HANDLER================================
  const handleClick = () => {
    setViewMore(!viewMore);
  };

  //===================HANDLER CATEGORY============================
  const handlerClickCategory = (names) => {
    //console.log(id);
    dispatch(getProductByCategory(names));
  };
  //===================HANDLER BRAND============================
  const handlerClickBrand = (name) => {
    // console.log("brand", name);
    dispatch(getProductByBrand(name));
  };

  useEffect(() => {
    // Hacemos una comprobación para asegurarnos de que _brands no está vacío
    if (_brands && _brands.length > 0) {
      setBrandShow(viewMore ? _brands : _brands.slice(0, 4));
    }
  }, [_brands, viewMore]);

  //======PRECIOS============

  const [minPrecio, setMinPrecio] = useState("");
  const [maxPrecio, setMaxPrecio] = useState("");

  const handleMinPrecioChange = (event) => {
    setMinPrecio(event.target.value);
  };

  const handleMaxPrecioChange = (event) => {
    setMaxPrecio(event.target.value);
  };

  return (
    <>
      {/*   <Accordion sx={{ marginY: 5, marginLeft: 0 }}> */}
      {/*   <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category"
          id="panel1a-header"
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Categoria
          </Typography>
        </AccordionSummary> */}

      <List sx={{ marginY: 3 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ marginLeft: 2, textDecoration: "underline" }}
        >
          Categoria
        </Typography>
        {/*  <AccordionDetails> */}

        <ListItemButton onClick={() => handlerClickCategory("ALL")}>
          <ListItemText primary="TODAS" />
        </ListItemButton>

        {_categories &&
          _categories?.map((c) => (
            <ListItemButton
              key={c.id}
              onClick={() => handlerClickCategory(c.names)}
            >
              <ListItemText primary={c.names} />
            </ListItemButton>
          ))}
      </List>

      {/*  </AccordionDetails> */}
      {/* </Accordion> */}
      <List component="nav" sx={{ marginTop: 2 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ marginLeft: 2, textDecoration: "underline" }}
        >
          Marca
        </Typography>

        <ListItemButton onClick={() => handlerClickBrand("ALL")}>
          <ListItemText primary="TODAS" />
        </ListItemButton>

        {brandShow &&
          brandShow?.map((b) => (
            <ListItemButton
              key={b.id}
              onClick={() => handlerClickBrand(b.names)}
            >
              <ListItemText primary={b.names} />
            </ListItemButton>
          ))}
      </List>
      {
        <Box display="flex" justifyContent="flex-start" mt={1} ml={3}>
          <Link
            variant="body2"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          >
            {viewMore ? "Ver menos" : "Ver más"}
          </Link>
        </Box>
      }
      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ marginTop: 5, marginLeft: 2 }}>
        <Typography
          variant="h6"
          component="h2"
          //gutterBottom
          marginBottom={0}
        >
          Precio
        </Typography>

        <ContainerRango>
          <Button>Mas barato</Button>
        </ContainerRango>

        <ContainerRango>
          <TextField
            label="mínimo"
            type="text"
            value={minPrecio}
            onChange={handleMinPrecioChange}
            size="small"
          />

          <TextField
            label="máximo"
            type="text"
            value={maxPrecio}
            onChange={handleMaxPrecioChange}
            size="small"
            sx={{}}
          />
        </ContainerRango>
      </Box>
    </>
  );
}

const ContainerRango = styled(muiBox)({
  display: "flex",
  flexDirection: "row",
  width: "90%",
  gap: "3%",
});
