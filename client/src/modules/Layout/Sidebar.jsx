import { useState, useEffect } from "react";

import * as React from "react";
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
/* 
=============================SIDEBAR==============================================================

*/
export default function Sidebar() {
  //========MARCAS==========
  const allMarcas = [
    "Philips",
    "General Electric (GE)",
    "Osram",
    "Schneider Electric",
    "Siemens",
    "Legrand",
    "Eaton",
    "ABB",
  ];
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const [marcas, setMarcas] = useState(allMarcas.slice(0, 5));

  const handleClick = () => {
    if (mostrarTodas) {
      setMarcas(allMarcas.slice(0, 5));
    } else {
      setMarcas(allMarcas);
    }
    setMostrarTodas(!mostrarTodas);
    //  console.log(`Has hecho clic en ${marca}`);
    // Aquí puedes realizar la acción que desees para el elemento seleccionado
  };

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
      <Accordion sx={{ marginY: 5 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="category"
          id="panel1a-header"
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Categoria
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItemButton>Iluminacion</ListItemButton>
          <ListItemButton>Electricidad</ListItemButton>
          <ListItemButton>Cables</ListItemButton>
        </AccordionDetails>
      </Accordion>

      <List component="nav" marginTop="2">
        <Typography variant="h6" component="h2" gutterBottom marginLeft={2}>
          Marca
        </Typography>
        {marcas.map((marca, index) => (
          <ListItemButton key={index} onClick={() => handleClick(marca)}>
            <ListItemText primary={marca} />
          </ListItemButton>
        ))}
      </List>

      <Box display="flex" justifyContent="flex-start" mt={1} ml={3}>
        {!mostrarTodas ? (
          <Link href="#" variant="body2" onClick={handleClick}>
            Ver más
          </Link>
        ) : (
          <Link href="#" variant="body2" onClick={handleClick}>
            Ver menos
          </Link>
        )}
      </Box>

      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ marginTop: 5, marginLeft: 2 }}>
        <Typography
          variant="h6"
          component="h2"
          /* gutterBottom */ marginBottom={0}
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
