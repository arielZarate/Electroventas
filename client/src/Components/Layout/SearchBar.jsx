import React, { useState, useEffect } from "react";

//===========searchBar=============

import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Box } from "@mui/material/";
import { FaSearch } from "react-icons/fa";
import { searchProductByName } from "../../redux/feactures/Thunks/products";
import { useDispatch } from "react-redux";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  //flexGrow: 1,
}));

/* const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: (theme.palette.primary.main = "#154bc0"), //color del icono
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0, // Alinear a la derecha
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
 */
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main, // Cambia el color del texto al color primario
  /*   color: "inherit", */
  fontSize: "100%",
  fontWeight: "bold", // Agrega estilo de letra gruesa al texto del input
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,

    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function SearchBar({ mobileStyles = {} }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    try {
      // Llamar a la función proporcionada por el componente padre
      //console.log("buscar", searchValue);
      dispatch(searchProductByName(searchValue));
      setTimeout(() => {
        setSearchValue("");
      }, 3000);
    } catch (error) {}
  };
  return (
    <Box>
      <Search
        sx={{
          ...mobileStyles,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Centrar horizontalmente el formulario
            // position: "relative", // Agrega esta línea para posicionar el ícono
          }}
        >
          <StyledInputBase
            placeholder="Buscar Producto "
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleInputChange}
            sx={{ flex: 1 }} // El campo de entrada toma el espacio restante
          />
          <IconButton type="submit" color="primary">
            <FaSearch />
          </IconButton>
        </form>
      </Search>
    </Box>
  );
}
